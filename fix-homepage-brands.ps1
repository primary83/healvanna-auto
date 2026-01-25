# Fix Homepage Brand Links - Makes Coming Soon brands clickable
$filePath = "C:\Users\prima\healvanna-auto\app\page.tsx"

$content = Get-Content $filePath -Raw

# Replace the old brands array with new one that has links
$oldBrands = @'
{ name: "Rivian", models: "R1T ⊤ R1S ⊤ R2", color: "amber" },
            { name: "BMW", models: "i4 ⊤ i7 ⊤ iX", color: "blue" },
            { name: "Mercedes", models: "EQS ⊤ EQE ⊤ EQB", color: "slate" },
            { name: "Porsche", models: "Taycan ⊤ Macan EV", color: "red" },
          ].map((brand) => (
            <div key={brand.name} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(74,144,217,0.1)] opacity-60
">
              <h4 className="text-lg font-medium text-white mb-1">{brand.name}</h4>
              <p className="text-[12px] text-[#6b7a94] mb-3">{brand.models}</p>
              <span className="text-[10px] tracking-[0.1em] uppercase text-emerald-400">Available Now →</span>
            </div>
'@

$newBrands = @'
{ name: "Rivian", models: "R1T · R1S", link: "/cars/rivian" },
            { name: "BMW", models: "i4 · i7 · iX", link: "/cars/bmw" },
            { name: "Mercedes", models: "EQS · EQE · EQB", link: "/cars/mercedes" },
            { name: "Porsche", models: "Taycan · Macan EV", link: "/cars/porsche" },
          ].map((brand) => (
            <Link key={brand.name} href={brand.link} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(74,144,217,0.1)] hover:border-emerald-500/50 transition-all group">
              <h4 className="text-lg font-medium text-white mb-1 group-hover:text-emerald-400">{brand.name}</h4>
              <p className="text-[12px] text-[#6b7a94] mb-3">{brand.models}</p>
              <span className="text-[10px] tracking-[0.1em] uppercase text-emerald-400">View Models →</span>
            </Link>
'@

if ($content -match "Rivian.*R1T.*R1S.*R2.*color.*amber") {
    $content = $content -replace [regex]::Escape($oldBrands), $newBrands
    Set-Content $filePath -Value $content -NoNewline
    Write-Host "SUCCESS! Homepage brands are now clickable!" -ForegroundColor Green
} else {
    Write-Host "Pattern not found - trying alternative fix..." -ForegroundColor Yellow
    
    # Alternative: Just replace the div with Link
    $content = $content -replace '<div key=\{brand\.name\} className="bg-\[rgba\(15,22,40,0\.5\)\] rounded-xl p-6 border border-\[rgba\(74,144,217,0\.1\)\] opacity-60[^"]*">', '<Link key={brand.name} href={"/cars/" + brand.name.toLowerCase()} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(74,144,217,0.1)] hover:border-emerald-500/50 transition-all group">'
    $content = $content -replace '</div>\s*\)\)\}', '</Link>))}'
    Set-Content $filePath -Value $content -NoNewline
    Write-Host "Applied alternative fix!" -ForegroundColor Green
}

Write-Host "`nNow run: npm run dev" -ForegroundColor Cyan
Write-Host "Then check http://localhost:3000" -ForegroundColor Cyan

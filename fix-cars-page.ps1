# Fix Cars Page Brand Links
$filePath = "C:\Users\prima\healvanna-auto\app\cars\page.tsx"

$content = Get-Content $filePath -Raw

# Replace Coming Soon with View Models and make clickable
$content = $content -replace 'COMING SOON', 'View Models →'

# Replace the div with Link for brand cards
$content = $content -replace '<div key=\{brand\.name\} className="bg-\[rgba\(15,22,40,0\.5\)\] rounded-xl p-6 border border-\[rgba\(74,144,217,0\.1\)\] opacity-60">', '<Link key={brand.name} href={"/cars/" + brand.name.toLowerCase().replace("-benz", "")} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(74,144,217,0.1)] hover:border-emerald-500/50 transition-all group">'

# Fix the closing div to Link
$content = $content -replace '(<span[^>]*>View Models →</span>\s*)</div>(\s*\)\))', '$1</Link>$2'

Set-Content $filePath -Value $content -NoNewline
Write-Host "SUCCESS! Cars page brands are now clickable!" -ForegroundColor Green
Write-Host "`nRefresh http://localhost:3000/cars to see the changes" -ForegroundColor Cyan

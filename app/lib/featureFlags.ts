// /shop is hidden. Flipping SHOW_SHOP back to true is not sufficient on its
// own — before /shop can return, all of the following need to be fixed:
//   - all 16 affiliateUrl values are bare "https://amazon.com" with no
//     product path or affiliate tag; each needs a real, tagged product URL
//   - all 16 rating/reviews values are invented numeric literals, not pulled
//     from anywhere real; they need to be genuine or removed
//   - the "As an Amazon Associate..." disclosure (app/shop/page.tsx) is only
//     accurate once the Amazon Associates program is actually approved
export const SHOW_SHOP = false;

export default function HowToMaintainEV() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-[rgba(74,144,217,0.15)]">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
            HEALVANNA <span className="text-[#4a90d9]">AUTO</span>
          </a>
          <a href="/blog" className="text-[14px] text-[#4a90d9] hover:text-[#6ba8eb] transition-colors duration-300">
            ← Back to Blog
          </a>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Category & Read Time */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#4a90d9] text-white text-[12px] font-medium rounded-full">
              Guides
            </span>
            <span className="text-[#6b7a94] text-[14px]">10 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-[42px] md:text-[52px] font-bold leading-[1.1] mb-6">
            How to Maintain Your Electric Vehicle:
            <span className="text-[#4a90d9]"> Essential Guide</span>
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-[#6b7a94] text-[14px] mb-8">
            <span>January 18, 2026</span>
            <span>•</span>
            <span>By Healvanna Editorial Team</span>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <img
              src="/blog/ev-maintenance-guide.png"
              alt="Electric vehicle maintenance guide"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              One of the most compelling benefits of electric vehicle ownership is dramatically reduced maintenance requirements. Without oil changes, transmission fluid, spark plugs, timing belts, and many other components that gasoline cars require, EV maintenance is simpler and often cheaper. However, electric vehicles aren't maintenance-free. Understanding what your EV does need keeps it running smoothly, maintains your warranty, and maximizes its lifespan. This guide covers everything you need to know about maintaining your electric vehicle.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              What EVs Don't Need: The Eliminated Maintenance
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Before diving into what EVs do need, let's appreciate what they don't need. This eliminated maintenance represents significant time and cost savings over the life of the vehicle.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              No Oil Changes
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Electric motors don't use engine oil. No oil changes, no oil filters, no worrying about oil levels. This alone saves $50-$100 every 5,000-7,500 miles compared to gas cars—potentially $1,000-$2,000 over 100,000 miles.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              No Transmission Service
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Most EVs use single-speed direct drive transmissions that require no fluid changes or maintenance. No transmission fluid flushes, no clutch replacements, no automatic transmission repairs—some of the most expensive maintenance items on conventional vehicles.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              No Spark Plugs or Ignition System
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Electric motors don't use combustion, so there are no spark plugs, ignition coils, or timing components to replace. No tune-ups required.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Fewer Brake Repairs
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              While EVs still have traditional brakes, regenerative braking handles most deceleration, dramatically extending brake pad and rotor life. Many EV owners go 100,000+ miles before needing brake service.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Battery Care: The Heart of Your EV
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              The high-voltage battery pack is the most important and expensive component in your EV. While modern batteries are remarkably durable, following best practices maximizes their lifespan and performance.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Avoid Extreme State of Charge
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              For daily driving, keeping your battery between 20-80% charge is optimal for long-term health. Regularly charging to 100% or depleting to near 0% accelerates battery degradation. Most EVs allow you to set a charge limit—set it to 80% for daily use and only charge to 100% when needed for longer trips.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Manage Charging Speed
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              While DC fast charging is convenient, frequent use generates more heat and can accelerate battery wear compared to slower Level 2 charging. For daily charging, use Level 2 at home. Save DC fast charging for road trips and when you truly need quick turnaround.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Temperature Management
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Batteries prefer moderate temperatures. In hot weather, park in shade when possible and precondition your car while plugged in. In cold weather, preconditioning warms the battery to optimal temperature using grid power rather than battery power.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Tire Maintenance
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Tires are one area where EVs may actually require more attention than gas cars. The instant torque and additional weight of batteries can accelerate tire wear.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Regular Rotation
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Rotate tires every 5,000-7,500 miles to ensure even wear. Many EVs have heavier front ends, causing front tires to wear faster. Regular rotation extends total tire life significantly.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Proper Inflation
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Check tire pressure monthly and maintain manufacturer-recommended levels. Proper inflation improves range, handling, and tire life. Underinflation increases energy consumption and causes uneven wear.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              EV-Specific Tires
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              When replacing tires, consider EV-specific options. These tires are designed for heavier vehicles, offer lower rolling resistance for improved range, and often have quieter operation to complement EVs' silent drivetrains.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Brake System Maintenance
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              While regenerative braking dramatically reduces wear on traditional brakes, the system still requires some attention.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Brake Pad and Rotor Inspection
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Have brake pads and rotors inspected during tire rotations. Many EV owners find their original brake pads last 100,000+ miles or more. However, light use can actually cause problems—brake rotors may rust from infrequent use.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Brake Fluid
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Brake fluid is hygroscopic—it absorbs moisture over time. Most manufacturers recommend replacing brake fluid every 2-3 years regardless of mileage. This relatively inexpensive service prevents corrosion and maintains proper brake function.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Cabin Air Filter
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs have cabin air filters just like conventional cars. Replace every 15,000-30,000 miles or annually, whichever comes first. A clogged filter reduces HVAC efficiency (which impacts range) and allows more pollutants into the cabin. Many cabin filters are easy DIY replacements.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Coolant System
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              While EVs don't have engine coolant in the traditional sense, they do have thermal management systems that use coolant to regulate battery, motor, and power electronics temperatures. Most EVs require coolant replacement every 4-6 years or 50,000-100,000 miles.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              12-Volt Battery
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Every EV has a 12-volt accessory battery separate from the main high-voltage pack. This small battery powers lights, door locks, and computers. The 12V battery typically lasts 3-5 years. If your car sits for extended periods, consider using a trickle charger.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              EV Maintenance Schedule Summary
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Monthly: Check tire pressure and inspect tire condition. Check washer fluid level. Every 5,000-7,500 Miles: Rotate tires, inspect brake pads and rotors. Annually: Replace cabin air filter, inspect HVAC system, check battery coolant level. Every 2-3 Years: Replace brake fluid. Every 4-6 Years: Replace battery coolant, replace 12V accessory battery.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Cost Savings: EV vs. Gas Car Maintenance
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Studies consistently show EVs cost 30-50% less to maintain than comparable gas vehicles. Over 100,000 miles, this typically translates to $4,000-$8,000 in savings. No oil changes save $1,000-$2,000. Reduced brake wear saves $500-$1,000. Eliminated tune-ups and transmission service save $1,500-$3,000.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Conclusion: Simple But Not Zero
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              Electric vehicle maintenance is dramatically simpler than conventional cars, but it's not completely maintenance-free. By following the straightforward care requirements—tire maintenance, brake fluid changes, cabin filter replacement, battery best practices, and software updates—you'll keep your EV running efficiently for years to come. The reduced maintenance burden is one of the great pleasures of EV ownership, giving you more time to enjoy driving and less time in service departments.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[rgba(74,144,217,0.2)]">
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">EV Maintenance</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Battery Care</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Electric Vehicle</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Car Care</span>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#080c14] py-12 px-6 border-t border-[rgba(74,144,217,0.15)]">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[#6b7a94] text-[14px]">© 2025 Healvanna Auto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

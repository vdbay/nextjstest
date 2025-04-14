"use client";

export function MarqueeBanner() {
  return (
    <div className="py-4 overflow-hidden border-y border-[#d4b76a] relative">
      <div className="flex space-x-8 animate-marquee-rtl whitespace-nowrap">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <h2 key={i} className="text-3xl font-bold mx-4">
              IMPROVE YOUR SKIN IDEAL
            </h2>
          ))}
      </div>
    </div>
  );
}

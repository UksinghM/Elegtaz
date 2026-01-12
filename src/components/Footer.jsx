import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ABOUT */}
        <div>
          <p className="text-sm leading-7 text-gray-300">
            Elegantize: Where weddings become legends! We’re not just a decor
            company in New York or New Jersey; we’re your VIP pass to
            enchantment. From breathtaking florals to ceiling charm and vinyl
            floor allure, we’ve got the magic touch.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#c9a96a] cursor-pointer">About</li>
            <li className="hover:text-[#c9a96a] cursor-pointer">Services</li>
            <li className="hover:text-[#c9a96a] cursor-pointer">Gallery</li>
            <li className="hover:text-[#c9a96a] cursor-pointer">Blog</li>
            <li className="hover:text-[#c9a96a] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#c9a96a] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#c9a96a] cursor-pointer">Terms Of Service</li>
            <li className="hover:text-[#c9a96a] cursor-pointer">Cookies Policy</li>
            <li className="hover:text-[#c9a96a] cursor-pointer">Website Sitemap</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4 text-sm">
          {/* Logos */}
          <div className="flex gap-4 mb-4">
            <Image src="/wedding/mahndi.png" alt="Maharani" width={70} height={70} />
            <Image src="/wedding/platinum.png" alt="Platinum" width={70} height={70} />
            <Image src="/wedding/blink.png" alt="Blink" width={70} height={70} />
          </div>

          <p className="flex items-center gap-2">
            <span className="material-symbols-outlined">call</span>
            +1 (347) 686-4562
          </p>

          <p className="flex items-center gap-2">
            <span className="material-symbols-outlined">mail</span>
            info@elegantize.com
          </p>

          <p className="flex items-start gap-2">
            <span className="material-symbols-outlined">location_on</span>
            10 Millers Lane New Hyde Park, New York 11040
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 pt-3">
            {["f", "📷", "p", "▶", "G"].map((icon, i) => (
              <div
                key={i}
                className="w-8 h-8 border border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#c9a96a] hover:border-[#c9a96a] hover:text-black transition"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

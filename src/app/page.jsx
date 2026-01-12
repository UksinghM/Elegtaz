import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-[#f7f5f2] text-gray-800 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] md:h-[80vh] flex items-center">
        <Image
          src="/wedding/weddingX.jpg"
          alt="Luxury Wedding"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-white">
            <p className="uppercase tracking-[3px] text-sm text-[#c6a062] mb-4">
              Bespoke Wedding Design
            </p>

            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
              Luxury Weddings <br /> & Timeless Events
            </h1>

            <p className="text-lg text-gray-200 mb-10">
              Creating unforgettable wedding experiences through refined décor,
              floral artistry, and elegant design.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/gallery"
                className="bg-[#c6a062] text-black px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#b59552] transition"
              >
                View Our Work
              </Link>

              <Link
                href="/contact"
                className="border border-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-[#111] text-white flex justify-center">
        <div className="max-w-6xl w-full px-6">
          <h2 className="text-4xl font-serif mb-12">
            Make Your Dreams Come True
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Breathtaking Décor',
                img: '/wedding/floral-design-in-weddings.jpg',
              },
              {
                title: 'Elegant Tablescapes',
                img: '/wedding/Centerpiece-Design-for-Weddings.webp',
              },
              {
                title: 'Romantic Candlelight',
                img: '/wedding/candle-light-dinner-wedding-decor.jpg',
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="relative h-56 mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WEDDING VISION ================= */}
      <section className="bg-[#f8f5f1] py-24 flex justify-center">
        <div className="max-w-7xl w-full px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              How Do You Envision <br /> Your Perfect Wedding?
            </h2>

            <p className="text-gray-600 max-w-lg mb-10">
              Explore our curated collection of featured weddings and breathtaking
              floral artistry.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  title: 'Garden Ceremony',
                  img: '/wedding/magical-floral-arches.jpg',
                },
                {
                  title: 'Ballroom Reception',
                  img: '/wedding/wedding-centerpiece-designs.jpg',
                },
                {
                  title: 'Candlelit Celebration',
                  img: '/wedding/candle-light-dinner-wedding-decor.jpg',
                },
              ].map((item, i) => (
                <div key={i}>
                  <div className="relative h-36 mb-2">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative h-[520px]">
              <Image
                src="/wedding/weddingpic.png"
                alt="Wedding Couple"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-white p-8 max-w-lg shadow-xl">
              <div className="text-center text-[#c6a062] mb-3 text-lg">
                ★★★★★
              </div>
              <p className="text-gray-600 italic text-center">
                “They turned our wedding dreams into reality. Every detail was perfect.”
              </p>
              <p className="text-center mt-2 font-semibold">
                Jessica & Michael
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-[#f7f5f2] text-gray-800 overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/wedding/ceremony-wedding-decor.webp"
          alt="Luxury Wedding"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-6xl px-6 mx-auto text-left text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Luxury Weddings <br /> & Events
          </h1>
          <p className="text-xl max-w-xl mb-8 text-gray-200">
            Elevating weddings with exquisite décor and unforgettable experiences.
          </p>
          <Link
            href="/gallery"
            className="inline-block bg-[#c6a062] text-black px-8 py-4 text-lg font-semibold hover:bg-[#b59552] transition"
          >
            View Our Work
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-[#111] text-white flex justify-center">
        <div className="max-w-6xl w-full px-6">
          <h2 className="text-4xl font-serif mb-6">Make Your Dreams Come True</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Breathtaking Décor', img: '/wedding/floral-design-in-weddings.jpg' },
              { title: 'Elegant Tablescapes', img: '/wedding/Centerpiece-Design-for-Weddings.webp' },
              { title: 'Romantic Candlelight', img: '/wedding/candle-light-dinner-wedding-decor.jpg' },
            ].map((item, i) => (
              <div key={i}>
                <div className="relative h-56 mb-4">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-serif">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEDDING VISION SECTION */}
      <section className="bg-[#f8f5f1] py-24 flex justify-center">
        <div className="max-w-7xl w-full px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              How Do You Envision <br /> Your Perfect Wedding?
            </h2>

            <p className="text-gray-600 max-w-lg mb-10">
              Explore our curated collection of featured weddings and breathtaking floral artistry.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  title: 'Garden Ceremony',
                  img: '/wedding/floral-decoration-wedding-ceremony.jpg',
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
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
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
                src="/wedding/couple.jpg"
                alt="Wedding Couple"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-white p-8 max-w-lg shadow-xl">
              <div className="text-center text-[#c6a062] mb-3">★★★★★</div>
              <p className="text-gray-600 italic text-center">
                “They turned our wedding dreams into reality. Every detail was perfect.”
              </p>
              <p className="text-center mt-2 font-semibold">Jessica & Michael</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

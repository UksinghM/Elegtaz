import '@/app/globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="bg-[#f7f5f2] text-gray-800 overflow-x-hidden">

      {/* ================= HERO SLIDER (STATIC PLACEHOLDER) ================= */}
      <section className="relative h-[85vh] flex items-center">
        <Image
          src="/wedding/weddingX.jpg"
          alt="Luxury Wedding Decor"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-4">
            Floral Design
          </h1>
          <p className="text-xl md:text-2xl italic mb-8">
            “Where Every Bloom Tells Your Love Story”
          </p>

          <Link
            href="/contact"
            className="inline-block bg-[#c6a062] text-black px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#b59552] transition"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Luxury Wedding Decor & Design in New York & New Jersey
        </h1>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
          At Elegantize, we believe your wedding should feel as extraordinary as your love story.
          Every couple is unique — and so should be their wedding décor. Our design team blends
          creativity, technical expertise, and luxury styling to produce weddings that are deeply
          personal and visually breathtaking.
        </p>
      </section>

      {/* ================= FEATURED IN ================= */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-6">
            Also Featured In
          </p>
          <div className="flex justify-center gap-12 flex-wrap items-center opacity-80">
            <Image src="/logos/maharani.png" alt="Maharani Weddings" width={140} height={60} />
            <Image src="/logos/wezoree.png" alt="Wezoree" width={140} height={60} />
            <Image src="/logos/weddingwire.png" alt="WeddingWire" width={140} height={60} />
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="py-24 bg-[#111] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">
            Real Weddings. Real Experiences.
          </h2>
          <p className="text-gray-300 max-w-3xl mb-12">
            Our portfolio features real couples, real venues, and real celebrations across
            New York City, New Jersey, and beyond — each designed with a unique story,
            color palette, and cultural expression.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative h-64 bg-black">
                <Image
                  src={`/wedding/portfolio-${i}.jpg`}
                  alt="Wedding Portfolio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="text-sm uppercase tracking-widest">Play Video</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-12 text-center">
            Our Signature Wedding Decor Services
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              'Floral Design',
              'Ceiling Design',
              'Centerpiece Design',
              'Vinyl Floor Wraps',
              'Ceremony Decor',
              'Draping Service',
              'Mandap Design',
              'Stage Design',
            ].map((service) => (
              <div key={service} className="text-center">
                <div className="relative h-48 mb-4">
                  <Image
                    src={`/services/${service.toLowerCase().replace(/ /g, '-')}.jpg`}
                    alt={service}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-8">
            Why Couples Choose Elegantize Weddings
          </h2>

          <ul className="space-y-4 text-lg text-gray-600">
            <li>Over 10 years of combined experience in luxury wedding design</li>
            <li>150+ weddings designed across New York & New Jersey</li>
            <li>Dedicated in-house design & production team</li>
            <li>Experience with high-end venues & estates</li>
            <li>Seamless coordination with planners & venues</li>
          </ul>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6">
              About Elegantize Weddings
            </h2>
            <p className="text-gray-600 mb-4">
              We specialize in crafting bespoke celebrations that reflect your unique love story.
              From initial concept to final installation, we manage every design detail with care,
              professionalism, and artistic excellence.
            </p>
            <p className="font-semibold mt-6">
              Raza – Event Decor Specialist
            </p>
          </div>

          <div className="relative h-96">
            <Image
              src="/wedding/about.jpg"
              alt="Elegantize Weddings Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-[#111] text-white text-center">
        <h2 className="text-4xl font-serif mb-6">
          Ready to Design Your Day?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Your wedding deserves thoughtful design, expert execution,
          and unforgettable beauty.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#c6a062] text-black px-10 py-4 font-semibold tracking-wide hover:bg-[#b59552] transition"
        >
          Book a Free Consultation
        </Link>
      </section>

    </main>
  )
}

import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wedding/ceremony-wedding-decor.webp"
            alt="Elegant Wedding Ceremony"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-[#c6a062] to-[#f4e4bc] bg-clip-text text-transparent">
            Elegantize
          </h1>
          <p className="text-xl md:text-3xl mb-8 font-light leading-relaxed">
            Crafting unforgettable wedding moments with exquisite decorations and timeless elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-[#c6a062] text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#b59552] transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Services
            </Link>
            <Link href="/gallery" className="border-2 border-[#c6a062] text-[#c6a062] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#c6a062] hover:text-black transition-all duration-300 transform hover:scale-105">
              View Gallery
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">Our Signature Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From floral arrangements to complete venue transformations, we bring your wedding vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/wedding/floral-design-in-weddings.jpg"
                  alt="Floral Design"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Floral Arrangements</h3>
              <p className="text-gray-600 mb-6">Stunning floral designs that capture the essence of romance and beauty.</p>
              <Link href="/services#floral" className="text-[#c6a062] font-semibold hover:text-[#b59552] transition-colors">
                Learn More →
              </Link>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/wedding/Centerpiece-Design-for-Weddings.webp"
                  alt="Centerpieces"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Centerpieces</h3>
              <p className="text-gray-600 mb-6">Elegant centerpieces that become the focal point of your celebration.</p>
              <Link href="/services#centerpieces" className="text-[#c6a062] font-semibold hover:text-[#b59552] transition-colors">
                Learn More →
              </Link>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/wedding/Draping-Services-usa.webp"
                  alt="Draping & Lighting"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Draping & Lighting</h3>
              <p className="text-gray-600 mb-6">Transform any space with luxurious draping and ambient lighting.</p>
              <Link href="/services#draping" className="text-[#c6a062] font-semibold hover:text-[#b59552] transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Witness the magic we've created for countless couples
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/wedding/wedding-centerpiece-designs.jpg"
                alt="Wedding Centerpiece"
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Centerpieces</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/wedding/floral-decoration-wedding-ceremony.jpg"
                alt="Floral Decoration"
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Ceremony Decor</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/wedding/candle-light-dinner-wedding-decor.jpg"
                alt="Candle Light Decor"
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Dinner Setup</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/wedding/mandap-wedding-decor-in-usa.jpg"
                alt="Mandap Decor"
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Mandap Design</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/gallery" className="bg-[#c6a062] text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#b59552] transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
              View Complete Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-[#f8f9fa] to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl font-bold mb-6 text-gray-800">Why Choose Elegantize?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over a decade of experience in wedding decoration, Elegantize has been the trusted partner for couples seeking perfection.
                Our team of expert designers and decorators work tirelessly to bring your unique vision to life, ensuring every detail is flawless.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c6a062] mb-2">500+</div>
                  <div className="text-gray-600">Weddings Decorated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c6a062] mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              <Link href="/about" className="bg-[#c6a062] text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#b59552] transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
                Discover Our Story
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/wedding/enchanting-backyard-wedding-decoration-ideas-create-a-magical-outdoor-celebration.png"
                  alt="Elegant Wedding Setup"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#c6a062] text-black p-6 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">What Our Couples Say</h2>
            <p className="text-xl text-gray-600">Real stories from real weddings</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#c6a062]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Elegantize transformed our wedding venue into a fairy tale. Every detail was perfect!"
              </p>
              <div className="font-semibold text-gray-800">Sarah & Michael</div>
              <div className="text-sm text-gray-500">June 2023</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#c6a062]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The floral arrangements were beyond our expectations. Absolutely stunning!"
              </p>
              <div className="font-semibold text-gray-800">Emily & David</div>
              <div className="text-sm text-gray-500">August 2023</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#c6a062]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Professional, creative, and attentive to every detail. Highly recommend!"
              </p>
              <div className="font-semibold text-gray-800">Jessica & Robert</div>
              <div className="text-sm text-gray-500">October 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#c6a062] to-[#b59552] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Create Your Perfect Wedding?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and turn it into reality. Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Planning
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

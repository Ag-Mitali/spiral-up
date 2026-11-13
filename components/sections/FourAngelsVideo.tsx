'use client'

export default function FourAngelsVideo() {
  return (
    <section className="py-4 md:py-16 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            controls
            preload="auto"
          >
            <source src="/videos/4 Angels - Final  4K 5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

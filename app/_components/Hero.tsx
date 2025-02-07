import React from 'react'

function Hero() {
  return (
<section
  className="relative bg-[url(https://img.freepik.com/free-vector/colorful-triangle-shapes-banner-technical-wire-mesh-style-vector_1017-45720.jpg?t=st=1737724649~exp=1737728249~hmac=67a7686695580e2de6d0457d33221d216d3b2de0769a02e41797a783890b9162&w=1060)] bg-cover bg-center bg-no-repeat"
>  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
    <div className="container mx-auto text-center">
    <h1 className="text-7xl font-bold text-center pt-10 pb-5">
          <span className="text-gray-700">AI Content</span>{" "}
          <span className="text-purple-500">Generator</span>
        </h1>

      <p className="mt-2 sm:text-xl/relaxed text-7xl  text-center pt-5 pb-10 text-gray-500">
      Revolutionize your content creation with our AI-powered app, delivering engaging and<br></br>
       high-quality text in seconds.

      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-600 focus:outline-none focus:ring active:bg-purple-700 sm:w-auto"
          href="/dashboard"
        >
          Get Started
        </a>

        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero

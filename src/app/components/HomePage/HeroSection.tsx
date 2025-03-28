// Import next.js components
import Image from "next/image";

// Start of tsx
export default async function HeroSection() {
  //   const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      {/* Hero section Flexbox */}
      <div
        id="heroSectionFlexbox"
        className="mb-8 flex flex-wrap justify-between md:mb-16"
      >
        {/* Main section in Hero Flexbox */}
        <div
          id="wordSectionFlexbox"
          className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48"
        >
          {/* Hero section Header */}
          <h1>Top 3D modeling for a top price!</h1>

          {/* Hero section page script */}
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We manufacure only the highest quality printed products for you. We
            are the best so come and shop with us.
          </p>
        </div>

        {/* Hero section Images */}
        <div
          id="ImageSectionFlexbox"
          className="mb-12 flex w-full md:mb-16 lg:w-2/3"
        >
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={"/images/products/phoneChargingDock.jpg"}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={"/images/products/evChargerMount.jpg"}
              alt="Great Photo2"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row"> */}
      {/* <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
        <Link
          href={"/Men"}
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Men
        </Link>
        <Link
          href={"/Women"}
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Women
        </Link>
        <Link
          href={"/Teens"}
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Teens
        </Link>
      </div> */}
      {/* </div> */}
    </section>
  );
}

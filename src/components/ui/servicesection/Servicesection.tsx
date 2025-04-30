import services from "@/data/services";
import Image from "next/image";
import Link from "next/link";

function Servicesection() {
  return (
    <>
      {services.map((service, index) => (
        <section
          key={index}
          className={`max-w-7xl mx-auto px-4 lg:my-16 my-8 grid grid-cols-1 ${
            index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-[1fr_2fr]"
          } gap-8`}
        >
          <div
            className={`relative w-full h-[60dvh] sm:h-[100dvh] mx-auto  ${
              index % 2 === 0 ? "order-1" : "order-2"
            }`}
          >
            <Image
              src={service.image}
              alt="logo Image"
              fill
              className="object-cover"
            />
          </div>
          <div className={index % 2 === 0 ? "order-2" : "order-1"}>
            <h1 className="text-5xl lg:mt-28 lg:mb-10 my-10">
              {service.title}
            </h1>
            <ul className="list-disc ms-8">
              {service.services.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Link
              href="/portfolio/#gallery"
              className="inline-block my-10   border-2 py-2 px-8 tracking-[4px] text-sm nunito_font hover:bg-black hover:text-white"
            >
              VIEW GALLERY
            </Link>
          </div>
        </section>
      ))}
    </>
  );
}

export default Servicesection;

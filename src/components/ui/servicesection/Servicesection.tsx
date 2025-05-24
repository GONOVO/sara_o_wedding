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
              index % 2 === 0 ? "order-1" : "sm:order-2"
            }`}
            data-aos="zoom-in-out"
          >
            <Image
              src={service.image}
              alt="logo Image"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className={index % 2 === 0 ? "order-2" : "order-1"}>
            <h1 className="text-5xl lg:mt-28 lg:mb-10 my-10" data-aos="fade-up">
              {service.title}
            </h1>
            <ul className="list-disc ms-8">
              {service.services.map((item, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 150}
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/portfolio/#gallery"
              className="inline-block my-10   border-2 py-2 px-8 tracking-[4px] text-sm nunito_font hover:bg-black hover:text-white"
              data-aos="fade-up"
              data-aos-delay={950}
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

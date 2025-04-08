import Image from "next/image";
import React from "react";

function Productowner() {
  return (
    <section className="mt-44 bg-[var(--lightGray-color)]">
      <div className="max-w-[1280px] pt-24 px-4 grid grid-cols-2 mx-auto -top-44 relative">
        <div className="w-full h-[820px] relative">
          <Image
            src="/images/Picture1.jpg"
            alt="Yewande Rwang-Dung"
            fill
            quality={100}
            unoptimized={true}
          />
        </div>
        <div>
          <h1 className="text-[72px] mt-5 leading-24 font-extralight italic -left-16 relative">
            WORLD <br />
            <span className="-left-2 relative">CLASS EVENTS</span>
          </h1>
          <div className="ms-16 mt-24 flex flex-col gap-12">
            <h3 className="nunito_font tracking-[4px] text-lg font-thin">
              PLANNING EXCEPTIONAL UK AND DESTINATION WEDDINGS AND EVENTS
            </h3>
            <p>
              {/* Led by renowned designer Alice Wilkes, Alice Wilkes Design is a
              London-based luxury wedding and events agency. We create, plan and
              manage worldwide weddings and events that push the visual and
              sensory boundaries of design. */}
              Yewande Rwang-Dung is a distinguished event design and interior
              décor expert with over 15 years of industry excellence. Renowned
              for her visionary creativity and meticulous attention to detail,
              she has built an impeccable reputation for curating breathtaking
              experiences that transcend expectations.
            </p>
            <p>
              {/* We’re the atelier that stylish couples contact when they want
              showstopping weddings, and we’re the agency that brands ask to
              design exclusive events that effortlessly convey their values and
              aesthetic. */}
              As the Founder and Creative Director of SARA O Events, Yewande has
              transformed event spaces into unforgettable masterpieces, crafting
              immersive designs that reflect elegance, sophistication, and
              innovation. Her expertise spans luxury weddings, high-profile
              corporate events, and bespoke interior décor, making her a
              sought-after name in the event design industry.
            </p>
            <p>
              Beyond her work as a designer, Yewande is a passionate mentor and
              industry leader, championing empowerment and professional
              development for the next generation of event designers and
              decorators. She has spearheaded multiple mentorship initiatives,
              equipping emerging talents with the skills and insights to thrive
              in the competitive world of luxury event styling.
            </p>
            <div>
              <h2 className="text-xl font-medium">Yewande Rwang-Dung</h2>
              <p className="kristy_font text-3xl">
                Event designer and interior décor expert
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productowner;

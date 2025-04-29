import Image from "next/image";
import Link from "next/link";
import React from "react";

function Servicesection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:my-16 my-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="relative w-full h-[60dvh] sm:h-[100dvh] mx-auto mt-8 sm:mt-4">
        <Image
          src="/images/serv1.JPG"
          alt="logo Image"
          fill
          className="object-cover"
          // sizes="(max-width: 768px) 30vw, 50vw"
        />
      </div>
      <div>
        <h1 className="text-5xl lg:mt-28 lg:mb-10 my-10">Private Events</h1>
        <ul>
          <li>Milestone Birthdays</li>
          <li>Private Celebrations Events (any space)</li>
          <li>Weddings: Traditional & White/Civil Ceremonies & Receptions</li>
          <li>Weddings: Vow ceremonies, Anniversaries & After Parties</li>
          <li>
            International Destination Celebrations (Birthdays, Weddings etc)
          </li>
          <li>Celebration of Life (Funeral) Receptions</li>
          <li>Other Décor themed Concepts or Events</li>
        </ul>
        <Link
          href="/portfolio/#gallery"
          className="inline-block my-10   border-2 py-2 px-8 tracking-[4px] text-sm nunito_font hover:bg-black hover:text-white"
        >
          VIEW GALLERY
        </Link>
      </div>
    </section>
  );
}

export default Servicesection;

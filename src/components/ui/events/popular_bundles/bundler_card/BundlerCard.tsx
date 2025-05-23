"use client";
import { IBundle } from "@/utils/interfaces";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function BundlerCard({ bundle, index }: { bundle: IBundle; index: number }) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLargeScreen(window.innerWidth >= 1024);
    }
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInView(true);
          }, index * 1300);
        }
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);
  return (
    <article
      ref={cardRef}
      // className="h-[600px] w-full sm:w-[330px] p-4 ps-8 bg-[var(--gold-color)] flex flex-col  transition-all duration-300 transform hover:-translate-y-3 hover:shadow-xl hover:bg-gray-200"
      className={`h-[600px] w-full sm:w-[330px] p-4 ps-8 bg-[var(--gold-color)] flex flex-col 
        transition-all duration-500 transform
        ${isInView ? "bundlers" : "translate-y-0"}`}
      style={{
        marginTop: isLargeScreen ? `${index * 56}px` : "24px",
      }}
      // data-aos="zoom-in-out"
      // data-aos-delay={index * 150}
    >
      <div className="flex items-center gap-4 my-4">
        {/* <span className="text-sm">The</span> */}
        <h1 className="text-3xl">{bundle.title}</h1>
      </div>
      <div className="w-[280px] h-[280px] rounded-full overflow-hidden relative mx-auto sm:mr-auto">
        <Image
          src={bundle.image}
          alt="bundle image"
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl pb-1 border-b mb-3">{bundle.subTitle}</h2>
        {bundle.paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </article>
  );
}

export default BundlerCard;

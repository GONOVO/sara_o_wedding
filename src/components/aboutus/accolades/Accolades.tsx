import LazyAutoPlayVideo from "@/components/ui/videoplayer/VideoPlayer";
function Accolades() {
  return (
    <section className="w-full md:h-[90vh] h-[50vh] relative">
      <div className="absolute inset-0">
        <LazyAutoPlayVideo
          videoPath="/videos/about1.mp4"
          placeholderImage="/images/aboutvideo.png"
          objectPosition="top"
        />
        <div className="w-full h-full bg-black opacity-25 absolute top-0"></div>
      </div>
      <div className="z-10 h-[100%] md:h-auto w-[92%] md:max-w-[760px] text-center flex flex-col gap-3 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 justify-between">
        <h1 className="md:text-[96px] text-[14vw] text-white">ACCOLADES</h1>
        <p className="text-[4vw] md:text-2xl md:leading-[48px] md:block hidden">
          Estera Events is humbled and honored to be named amongst the worlds’s
          top event planning firms by
        </p>
        <h2 className="text-[9vw] md:text-6xl font-medium text-white">
          VOGUE <span className="text-black md:text-[96px] text-[11vw]">&</span>{" "}
          BRIDES
        </h2>
      </div>
    </section>
  );
}

export default Accolades;

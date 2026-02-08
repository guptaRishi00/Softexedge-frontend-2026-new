export default function Video({ data }: any) {
  return (
    <div className="w-full lg:h-[96.5vh] h-150 bg-white  relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-[23%] bg-linear-to-r from-white to-transparent pointer-events-none z-10" />

      <div className="absolute right-0 top-0 bottom-0 w-[23%] bg-linear-to-l from-white to-transparent pointer-events-none z-10" />

      <div className="flex items-center justify-center h-full text-zinc-600">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={data.video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

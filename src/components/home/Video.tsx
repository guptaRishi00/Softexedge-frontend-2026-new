export default function Video({ data }: any) {
  return (
    <div className="w-full lg:h-[90vh] h-150 bg-white  relative overflow-hidden rounded-[20px]">
      <div className="flex items-center justify-center h-full text-zinc-600 ">
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

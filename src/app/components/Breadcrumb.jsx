import React from "react";

const Breadcrumb = ({ title = "Page" }) => {
  return (
    <div className="relative h-60 md:h-72 w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/img/about/breadcrumb.jpg"
          alt={`${title} background`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/70 to-transparent" />
      </div>

      {/* Animated Circles */}
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-yellow-400 animate-ping z-10" />
      <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-white animate-pulse z-10" />
      <div className="absolute top-6 right-10 w-6 h-6 rounded-full bg-green-500 animate-bounce z-10" />

      {/* Title & Breadcrumb */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-sm md:text-base text-gray-200">
          <span className="text-white font-semibold">Home</span> &nbsp;—&nbsp;{" "}
          {title}
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;

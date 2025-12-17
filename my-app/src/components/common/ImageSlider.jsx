import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  if (!images?.length) return null;

  return (
    <div className="relative w-full max-w-[486px] max-h-[486px]">
      <img
        src={images[current]}
        className="w-full h-120 object-cover rounded-2xl"
        alt=""
      />

      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 px-2"
          >
            ◀
          </button>
          <button
            onClick={() =>
              setCurrent((prev) => Math.min(prev + 1, images.length - 1))
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 px-2"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;

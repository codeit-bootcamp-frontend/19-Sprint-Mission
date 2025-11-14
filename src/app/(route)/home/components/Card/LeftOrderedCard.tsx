import Image from "next/image";

interface CardProps {
  tag: string;
  title: string;
  explanation: string;
  image: string;
}

const Card = ({ tag, title, explanation, image }: CardProps) => {
  return (
    <div className="flex h-[417px] w-[344px] flex-col items-start justify-center gap-6 rounded-xl bg-[#FCFCFC] md:h-[708px] md:w-[696px] lg:h-[444px] lg:w-[988px] lg:flex-row lg:items-center lg:gap-[14px]">
      <div className="relative h-[259px] w-[344px] md:h-[524px] md:w-[696px] lg:h-[444px] lg:w-[579px]">
        <Image src={image} alt="" fill />
      </div>

      <div className="flex w-full flex-col items-end gap-3 lg:w-[340px]">
        <span className="text-right text-[16px] font-semibold text-[#3692FF] md:text-[18px] lg:text-lg">
          {tag}
        </span>
        <h1 className="text-right text-[24px] font-bold whitespace-pre-line md:text-[32px] lg:text-[40px]">
          {title}
        </h1>
        <span className="text-right whitespace-pre-line md:text-[18px] lg:text-[24px]">
          {explanation}
        </span>
      </div>
    </div>
  );
};

export default Card;

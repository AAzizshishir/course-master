import Image from "next/image";
import heroImage from "@/public/heroImage/bannerEdTech.jpg";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="relative">
      {/* Image */}
      <Image
        src={heroImage}
        alt="Banner Image"
        className="h-screen object-cover"
      />
      {/* Content */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute top-50 left-20 z-50">
        <h1 className="text-7xl font-bold text-white text-center">
          Learn a new skill from Online Courses
        </h1>
        <p className="text-white text-2xl text-center my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere
          animi aliquam aliquid repellendus minus voluptates est corporis
          recusandae soluta?
        </p>

        <div className="w-full flex items-center justify-center">
          <Button className="">See Courses</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

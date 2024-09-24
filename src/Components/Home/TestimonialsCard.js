import React, { useRef } from "react";

const TestimonialsCard = ({ testimonialDetails }) => {
  return (
    <>
      {/* <Link href="https://staging.aarnalaw.com/contact/"> */}
        <div className="flex flex-col justify-center gap-1 bg-white shadow-lg mb-10 mx-2 p-5 w-auto md:w-[460px] h-[250px]">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-32">
                <h3 className="text-custom-blue font-semibold text-xl md:text-2xl">
                  {testimonialDetails.name}
                </h3>
                <p className="text-custom-gray text-sm md:text-lg">
                  {testimonialDetails.post}
                </p>
                <p className="text-custom-gray text-sm md:text-lg">
                  {testimonialDetails.desingnation}
                </p>
              </div>
            </div>
            <div className="mb-8">
              <img
                src={testimonialDetails.imageUrl}
                width={90}
                height={90}
                className="object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-custom-gray line-clamp-2 leading-tight">
              {testimonialDetails.desc}
            </p>
          </div>
          <a href="" className="text-custom-blue">
        Read more
      </a>
        </div>
      {/* </Link> */}
    </>
  );
};


export default TestimonialsCard;

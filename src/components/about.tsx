import Image from "next/image";
import about from "@/public/Ab - Copy.webp";

const About = () => {
  return (
    <div  className="mb-28 max-w-[75rem] text-center sm:mb-0">
    <div className="flex-col text-center justify-center">
      <h1 className="text-3xl font-medium capitalize mb-8 text-center my-6 pt-5">
        About
      </h1>
      <div className="grid xl:grid-cols-2 lg:text-start ml-24">
        <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
                <div className="flex justify-start flex-col">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="mt-2 leading-relaxed text-base text-gray-700 dark:text-white/70">
              We believe that a website is the fondation of a successful online
              presence, and our goal is to help business establish a strong
              digital presence.Our process begins with understanding your
              business goals.
            </p>

            <h3 className="text-xl font-semibold mb-2" >Our Vision</h3>
            <p className="mt-2 leading-relaxed text-base text-gray-700 dark:text-white/70">
              We then use this information to create a custom website that not only reflects your 
              brand but also helps you achieve your business objectives.From responsive design
              to intuitive navigation,we focus on every details.
            </p>

            </div>
          </div>
        </div>
        {/* Right Image */}
        <Image 
        src={about} alt="about Me" width={600} height={50} quality={100} className="rounded-full mt-0 object-cover"
        />
      </div>
    </div>
    </div>
  );
};

export default About;

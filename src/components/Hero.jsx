import orang1 from "../assets/orang1.png";

const Hero = () => {
  return (
    <section className="w-full flex justify-center mt-15" id="About">
      <div className="pt-4 pb-0 md:grid grid-cols-2 w-[90%]">
        <div className="m-3">
          <h1
            className="text-left uppercase text-[#49e146] font-extrabold font-anton text-3xl md:text-4xl xl:text-6xl  md:leading-10 xl:leading-20
          "
          >
            Start your <br />
            business online
            <br />
            <span className="text-black ">journey here</span>
          </h1>
          <p className="text-[12px] my-4">
            Welcome to
            <span className="text-blue-950 italic underline">
              BantuUsahaKamu.com
            </span>
            We are here to help you launch and grow your dream online business.
            With comprehensive guides and trusted resources, your journey to
            digital success starts right here. Let's unlock your business
            potential together.
          </p>
          <a
            href=""
            className="p-3 bg-[#49e146] hover:bg-black hover:text-white"
          >
            Get Start here
          </a>
        </div>
        <img src={orang1} alt="" width="500px" className="" />
      </div>
    </section>
  );
};
export default Hero;

import orang2 from "../assets/orang2.png";
import { WHYUS1 } from "../contants";
import { WHYUS2 } from "../contants";

const WhyUs = () => {
  return (
    <section className="w-full">
      <div className="lg:grid lg:grid-cols-3 p-8 pb-0">
        <div className="">
          <h1 className="text-7xl font-extrabold text-[#5ee45b] m-7">
            Why Us?
          </h1>
          <div>
            {WHYUS1.map((whyus, index) => (
              <div key={index} className="m-8">
                <h1 className="font-bold text-3xl">{whyus.title}</h1>
                <p>{whyus.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={orang2} alt="" className="flex" />
          <p className="text-center">bantuUsahaKamu.com</p>
        </div>
        <div>
          {WHYUS2.map((whyus, index) => (
            <div key={index} className="m-8">
              <h1 className="font-bold text-3xl text-right">{whyus.title}</h1>
              <p className="text-right">{whyus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyUs;

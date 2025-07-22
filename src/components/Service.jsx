import service1 from "../assets/services/1.png";
import service2 from "../assets/services/2.png";
import service3 from "../assets/services/3.png";

const Service = () => {
  return (
    <section className="bg-black p-7" id="Service">
      <h1 className="text-white text-[20px] font-bold lg:text-5xl md:text-3xl m-9">
        Our Mission is to make Your Business
        <br /> better through Online
      </h1>
      <div className="flex justify-center">
        <div className="grid md:min-md:grid-cols-2 ">
          <div className="grid grid-rows-2">
            <a
              href=""
              className="bg-[#49e146] m-2 w-[300px] h-[200px] text-2xl font-bold inline-flex items-center justify-start relative hover:scale-120"
            >
              <img src={service1} alt="" className="absolute w-fit" />
              <div className="z-2 flex p-5 bg-white opacity-70">
                <h1 className="font-bold p-3">
                  WEB <br />
                  DEVELOPMENT
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#1f1f1f"
                >
                  <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </div>
            </a>
            <a
              href=""
              className="bg-[#5ee45b] m-2 hover:scale-120 w-[300px] h-[200px] text-2xl font-bold inline-flex items-center justify-start relative"
            >
              <img src={service2} alt="" className="absolute w-fit" />
              <div className="z-2 flex p-5 bg-white opacity-70">
                <h1>
                  WEB <br />
                  DESIGN
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#1f1f1f"
                >
                  <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </div>
            </a>
          </div>
          <a
            href=""
            className="bg-[#72ed70] m-auto md:min-md:m-2 text-2xl hover:scale-120 w-[200px] h-[400px] font-bold inline-flex items-center justify-start relative"
          >
            <img src={service3} alt="" className="absolute w-fit" />
            <div className="z-2 flex p-5 bg-white opacity-70">
              <h1>
                INSTAGRAM <br />
                VISUAL DESIGN
              </h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#1f1f1f"
              >
                <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Service;

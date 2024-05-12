// eslint-disable-next-line no-unused-vars
import React from "react";

function Home() {
  return (
    <div className="xl:px-48 lg:px-20 sm:px-14 py-3">
      <div className="min-[850px]:flex-row max-[850px]:my-10 my-20 max-[630px]:my-5 flex flex-col justify-between items-center">
        <img
          className="w-96 max-[850px]:mb-10 max-[630px]:w-56"
          src="https://i.ibb.co/5BCcDYB/Remote2.png"
          alt=""
        />
        <div className="flex flex-col min-[850px]:items-end items-center h-full w-4/5 max-[630px]:w-15">
          <h3 className="max-[630px]:text-3xl text-5xl font-bold font-sans mb-0">
            Download Now!
          </h3>
          <h3 className="max-[630px]:text-2xl text-4xl font-bold font-sans mb-3">
            Lorem Ipsum
          </h3>
          <button className="max-[630px]:text-lg max-[630px]:px-2  p-1 px-3 bg-orange-700 text-2xl mt-1  text-white font-bold border-black rounded-xl border-2  hover:bg-black hover:border-white hover:shadow-2xl">
            <i className="fa-brands fa-google-play mr-1 p-1 py-2 "></i> Download
            Now
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center max-[630px]:mt-10 max-[850px]:my-16 mt-40 mb-10">
        <img
          className="w-96 max-[818px]:mb-5 max-[630px]:w-56"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt=""
        />
        <h3 className="max-[630px]:text-3xl max-[630px]:mt-2 text-5xl font-semibold font-sans mt-6">
          Lorem Ipsum Yojo
        </h3>
      </div>
    </div>
  );
}

export default Home;

export default function ContactUs() {
  return (
    <div className="xl:px-32 lg:px-16 md:px-8 px-4 py-24 max-md:py-12 flex max-md:flex-col max-md:items-center justify-center">
      <div className="bg-gray-200 w-5/12 max-md:w-3/4 max-md:mb-4 max-md:mr-0 rounded-xl p-4 mr-7">
        <h3 className="text-4xl font-bold max-[365px]:text-2xl">
          Get in touch:
        </h3>
        <p className="text-xl max-[365px]:text-md mt-1 font-medium text-gray-600">
          Fill in the form to start conversation
        </p>

        <div className="flex items-center mt-3">
          <i className="fa-solid fa-location-dot text-4xl mt-2 mr-3 text-gray-600"></i>
          <p className="text-xl max-[365px]:text-lg font-medium text-gray-600">
            Acme inc,Street,
            <br />
            state, Postal code
          </p>
        </div>
        <div className="flex items-center mt-3">
          <i className="fa-solid fa-phone text-3xl mr-3 text-gray-600"></i>
          <p className="text-xl max-[365px]:text-lg font-medium text-gray-600">
            +99 9876543210
          </p>
        </div>

        <div className="flex items-center mt-3">
          <i className="fa-regular fa-envelope text-3xl mr-3 text-gray-600"></i>
          <p className="text-xl max-[365px]:text-lg font-medium text-gray-600">
            info@acme.org
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-evenly w-3/12 max-md:w-3/4">
        <input
          type="text"
          placeholder="Full Name"
          className="mb-3 rounded-lg border-2 border-gray-400 text-gray-800 p-2 text-lg focus:border-orange-500 focus:outline-none"
        />
        <input
          type="text"
          className="mb-3 rounded-lg border-2 border-gray-400 text-gray-800 p-2 text-lg focus:border-orange-500 focus:outline-none"
          placeholder="Email"
        />
        <input
          type="text"
          className="mb-3 rounded-lg border-2 border-gray-400 text-gray-800 p-2 text-lg focus:border-orange-500 focus:outline-none"
          placeholder="Telephone Number"
        />
        <button className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg trasition ease-in-out duration-300">
          Submit
        </button>
      </div>
    </div>
  );
}

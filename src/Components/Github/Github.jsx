import { useLoaderData } from "react-router-dom";
function Github() {
  let data = useLoaderData();
  return (
    <div className="xl:px-20 lg:px-10 md:px-5 px-5 py-3 flex flex-col items-center justify-center ">
      <div className="flex flex-col justify-center w-full bg-black rounded-3xl h-16 text-white text-center mb-4 text-4xl max-[550px]:text-2xl max-[550px]:h-10  max-lg:w-3/4">
        <h1 className="text-yellow-white font-semibold font-sans">
          Github Followers : {data.followers}
        </h1>
      </div>
      <div className="flex justify-between max-lg:flex-col max-lg:items-center max-lg:justify-center">
        <img
          src={data.avatar_url}
          className="w-[337px] max-[550px]:w-[250px] rounded-full border-black border-2 mr-28 max-[1332px]:mr-10 max-lg:mb-3 max-lg:mr-0"
          alt=""
        />
        <div className="w-[80%] bg-gray-100 border-black border-[1px] shadow-lg rounded-3xl px-5 py-3 text-2xl flex flex-col justify-around">
          <h3 className="bg-white shadow-xl border-[1px] py-2 px-5 rounded-3xl w-fit mb-2">
            <span className="text-red-700 font-semibold">Name : </span>{" "}
            {data.name}
          </h3>
          <h3 className="bg-white shadow-xl border-[1px] py-2 px-5 rounded-3xl w-fit mb-2">
            <span className="text-red-700 font-semibold">UserName : </span>
            {data.login}
          </h3>
          <h3 className="bg-white shadow-xl border-[1px] py-2 px-5 rounded-3xl w-fit mb-2">
            <span className="text-red-700 font-semibold">Description : </span>
            {data.bio}
          </h3>
          <h3 className="bg-white shadow-xl border-[1px] py-2 px-5 rounded-3xl min-w-[212px] overflow-x-auto">
            <p className="text-red-700 font-semibold">GitHub Page Link : </p>{" "}
            <a
              className="text-blue-700 text-xl  font-bold"
              href={data.html_url}
            >
              {data.html_url}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const fetchGithubInfo = async () => {
  let res = await fetch(`https://api.github.com/users/Mohammed-Abubakar-11786`);
  return res.json();
};

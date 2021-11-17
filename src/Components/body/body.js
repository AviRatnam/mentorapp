// import { useContext } from "react/cjs/react.production.min";
// import { MentorContext } from "../../MentorContext";
import Card from "../card/card";
import MagGlass from "./glass";
import { useEffect, useState } from "react";

const Body = () => {
  const bodystyle = `px-52 pt-32 pb-10`;
  const selectstyle =
    "text-2xl font-bold border-b-2 border-transparent focus:border-black text-gray-400 focus:text-black";

  const [data, setdata] = useState(null);
  const [showdata, setshowdata] = useState(false);

  const API = "https://randomuser.me/api/?results=15";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((info) => {
        setdata(info);
        setshowdata(true);
      });
  }, []);

  return (
    <div class={bodystyle}>
      <div class="flex gap-5">
        <a href="#" class={selectstyle}>
          Mentors
        </a>
        <a href="#" class={selectstyle}>
          Topics
        </a>
      </div>
      <div class="pt-5">
        <form>
          <div class="bg-gray-100 rounded-lg px-4 py-3 md:w-96 w-60 flex items-center gap-2 border border-gray-200">
            <MagGlass />
            <input
              type="text"
              placeholder="Search by company, role or language"
              class="bg-gray-100 text-gray-700 w-full focus:outline-none"
            />
          </div>
        </form>
      </div>
      <div class="pt-10 lg:grid lg:grid-cols-4 grid-cols-2 gap-10">
        {showdata &&
          data.results.map((info, i) => (
            <div id={i}>
              <Card
                name={info.name.first}
                image={info.picture.large}
                email={info.email}
              />
            </div>
          ))}
      </div>

    </div>
  );
};

export default Body;

// import Speechbubble from "./speechbubble";
import Suitcase from "./suitcase";

const Card = ({ name, image, email }) => {
  const cardstyle =
    "w-72 h-96 rounded-lg hover:shadow-lg shadow-md text-black cursor-pointer ";
  //flex items-end
  const imagestyle = `w-full h-3/4 overflow-hidden object-cover rounded-t-lg`;
//h-96
  return (
    <div class={cardstyle}>
      <img src={image} alt="image" class={imagestyle} />
      <div class="align-baseline font-bold text-sm pl-3 pt-1">
        <div class="text-xl">{name}</div>
        <div>Engineer</div>
        <div class="flex items-center gap-2 pt-2">
          <Suitcase />
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

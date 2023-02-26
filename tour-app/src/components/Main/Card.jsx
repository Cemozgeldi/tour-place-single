import { data } from "../../help/data";

const Card = () => {
  return (
    <div className="card-container">
      {data.map((item) => {
        return (
          <div className="cards">
            <div className="title">
              <h1>{item.title}</h1>
            </div>
            <img src={item.image} alt="photo1" />
            <div className="card-over">
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;

import "./index.scss";
const FireIco = require("../img/fire.svg").default;
const ArrowSelectIco = require("../img/arrow-select.svg").default;

const Benefits = () => {
  const ben = [
    { id: 1, name: "Build Your First Application", value: "Codeigniter" },
    { id: 2, name: "Build something beautiful", value: "Sketch" },
    { id: 3, name: "Firebase on Android: Cloud Fire", value: "Firebase" },
    { id: 4, name: "Creating Custom Animations", value: "Principle" },
    { id: 5, name: "Build Your First Application", value: "Codeigniter" },
    { id: 6, name: "Firebase on Android: Cloud Fire", value: "Firebase" },
    { id: 7, name: "Creating Custom Animations", value: "Principle" },
  ];
  return (
    <div className="batman-store__benefits-list">
      {ben?.map((item) => {
        return (
          <div key={item?.id} className="batman-store__benefits-item">
            <div className="batman-store__benefits-item--container">
              <div className="batman-store__benefits-item--container-img">
                <img src={FireIco} alt="FireIco" />
              </div>
              <div>
                <p>{item?.name}</p>
                <h4>{item?.value}</h4>
              </div>
            </div>
            <img src={ArrowSelectIco} alt="ArrowSelectIco" />
          </div>
        );
      })}
    </div>
  );
};

export default Benefits;

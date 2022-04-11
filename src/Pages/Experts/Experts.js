import React from "react";
import expert1 from "../../images/experts/expert-1.jpg";
import expert2 from "../../images/experts/expert-2.jpg";
import expert3 from "../../images/experts/expert-3.jpg";
import expert4 from "../../images/experts/expert-4.jpg";
import expert5 from "../../images/experts/expert-5.jpg";
import expert6 from "../../images/experts/expert-6.png";
import Expert from "./Expert/Expert";
const Experts = () => {
  const experts = [
    { id: 1, name: "Willam Smith", position: "Sr- Engineer", img: expert1 },
    { id: 2, name: "Barack Obama", position: "Sr- Engineer", img: expert2 },
    { id: 3, name: "Bill Clinton", position: "Sr- Engineer", img: expert3 },
    { id: 4, name: "Odean Smith", position: "Sr- Engineer", img: expert4 },
    {
      id: 5,
      name: "Glenn Flintoff",
      position: "Sr- Engineer",
      img: expert5,
    },
    { id: 6, name: "Nita Ambani", position: "Sr- Engineer", img: expert6 },
  ];
  return (
    <div className="container">
      <h1 className="text-primary my-4">Our Experts</h1>
      <div className="row justify-content-between ">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;

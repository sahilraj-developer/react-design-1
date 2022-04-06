import React from "react";
import Desti from "./Desti";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Destination = () => {
  return (
    <>
    <div className="grid-h3">
    <h3>We are currently in 46 Countries</h3>
    </div>
    
      <section className="grid">
       

        <Desti name="Ukrain" img={img2} />
        <Desti name="Dubai" img={img3} />
        <Desti name="Nepal" img={img4} />
      </section>
    </>
  );
};

export default Destination;

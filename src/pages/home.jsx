import "../css/home.css";
// import TestiSlider from "../component/testiSlider";
import Clients from "../component/Hero/Clients";
import Projects from "../component/Projects/Projects";
import CardTestimonial from "../component/Card-Testimonial/CardTestimonial";
import CombinedProjectsSlider from "../component/EmpatKeunggulan/EmpatKeunggulan";

const Home = () => {
  return (
    <div>
     
      <div className="cont-hero-home">
        <Clients />
      </div>
      <div className="card-testimonial">
        <CombinedProjectsSlider />
      </div>
    </div>
  );
};
export default Home;

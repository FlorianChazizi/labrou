import Heroo from "./component/Heroo";
import Services from "./component/Services"
import ServingAreas from "./component/ServingAreas";
import Contact from "./component/Contact";
import Carousel from './component/Carousel';
export default function Home() {
  return (
    <div className="">
      {/* <Hero /> */}
      <Heroo />
      <Services />
      <ServingAreas />
      <Carousel />
      <Contact />

    </div>
  );
}

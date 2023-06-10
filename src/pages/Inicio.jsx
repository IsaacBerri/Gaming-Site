import Header from "../components/Header";
import BarInfo from "../components/BarInfo";
import SectionMixto from "../components/SectionMixto";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Inicio = () => {
  return (
    <>
      <NavBar principal={true}/>
      <Header />
      <BarInfo />
      <SectionMixto section1={true} />
      <SectionMixto section2={true} />
      <SectionMixto section3={true} />
      <Footer />
    </>
  );
};

export default Inicio;

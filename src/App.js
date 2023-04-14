
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Settinds from './components/Settinds';
import About from './components/About';
import Digitalliteracy from './components/Digitalliteracy';
import Focusarea from './components/Focusarea';
import User from './components/User';
import Contact from './components/Contact';



export default function App() {
  document.querySelector(".num1").addEventListener("click", () => {
    document.querySelector(".para").innerHTML =
      "<h3>Learners can benefit from the knowledgebase and experience of 4 decades of Infosys as an enterprise. We also bring the quality content from our partners and leading universities across the world. Content is aligned with New Education policy 2020. Includes soft skills and vocational skills.<h>";
  })
  document.querySelector(".num2").addEventListener("click", () => {
    document.querySelector(".para").innerHTML =
      "<h3>Teacher - Integrated collaborative platform, engagement tools, Polls, Mind mapping tools, access to telemetry. Video proctored Assessment platform.<h>";
  })
  document.querySelector(".num3").addEventListener("click", () => {
    document.querySelector(".para").innerHTML =
      "<h3>School - Customized landing page, integrated view of Time table, Orgwide Telemetry, increased student engagement, Enhanced Visibility.<h>";
  })
  document.querySelector(".num4").addEventListener("click", () => {
    document.querySelector(".para").innerHTML ="<h3>Volunteer - Opportunity to contribute content, Translation of Quality content to regional languages which will have nationwide impact, Involvement in expert sessions, Access to Pools of homogeneous group of students.</h3>"
  })
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Settinds />
      {/* <section className="cardslist">
          <About
            image="card1img" 
            p="siva sankara"         
          />
          <About
            image="card2img" 
            p="siva "         
          />
          <About
            image="card3img" 
            p="siva sankara"         
          />
          <About
            image="card4img" 
            p="siva sankara"         
          />
      </section> */}
      <Digitalliteracy />
      <Focusarea />
      <User />
      <Contact />
      <center><p>Copyright
        ©
        2023 SivaRockzz❤️</p></center>
    </div>
  );
}


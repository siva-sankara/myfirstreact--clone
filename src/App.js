
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Settinds from './components/Settinds';
import About from './components/About';
import Digitalliteracy from './components/Digitalliteracy';
import Focusarea from './components/Focusarea';
import User from './components/User';
import Contact from './components/Contact';
import  card2 from '../src/images/card2img.png'
import card1 from '../src/images/card1img.png'
import card3 from '../src/images/card3img.png'
import card4 from '../src/images/card4img.png'
export default function App() {
  // document.querySelector(".num1").addEventListener("click", () => {
  //   document.querySelector(".para").innerHTML =
  //     "<h3>Learners can benefit from the knowledgebase and experience of 4 decades of Infosys as an enterprise. We also bring the quality content from our partners and leading universities across the world. Content is aligned with New Education policy 2020. Includes soft skills and vocational skills.<h>";
  // })
  // document.querySelector(".num2").addEventListener("click", () => {
  //   document.querySelector(".para").innerHTML =
  //     "<h3>Teacher - Integrated collaborative platform, engagement tools, Polls, Mind mapping tools, access to telemetry. Video proctored Assessment platform.<h>";
  // })
  // document.querySelector(".num3").addEventListener("click", () => {
  //   document.querySelector(".para").innerHTML =
  //     "<h3>School - Customized landing page, integrated view of Time table, Orgwide Telemetry, increased student engagement, Enhanced Visibility.<h>";
  // })
  // document.querySelector(".num4").addEventListener("click", () => {
  //   document.querySelector(".para").innerHTML ="<h3>Volunteer - Opportunity to contribute content, Translation of Quality content to regional languages which will have nationwide impact, Involvement in expert sessions, Access to Pools of homogeneous group of students.</h3>"
  // })
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Settinds />
      <div className="cardslist">
          <About
            image={card1} 
            p="Program to introduce young minds to new technologies and its application in business and day-to-day life."         
          />
          <About
            image={card2}
            p="can explore possibility of application of Technologies in real life Java, Python, C#, JavaScript and more.."         
          />
          <About
            image={card3}
            p="Learn to compete in global space, Learn spoken English and written English from the industry standard content."         
          />
          <About
            image={card4}
            p="College students and faculty can learn application of horizon 2 technologies from subject matter experts and Architects."         
          />
      </div>
      <Digitalliteracy />
      <Focusarea />
      <User />
      <Contact />
      <center><p className='footer'>Copyright
        ©
        2023 SivaRockzz❤️</p></center>
    </div>
  );
}


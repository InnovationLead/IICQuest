import Navbar from "./Components/Nav/Navbar"
import Infocontent from "./Components/Infocontent"
import pattern from './Components/Assets/pattern4.png'
import About from './Components/About'
import './main.css';
import FAQ from "./Components/FAQ";
import PrizeSection from "./Components/Prize/PrizeSection";
import QuestGallery from "./Components/ImageGallery/QuestGallery";
import Event from "./Components/EventPage/Event";
import MyFooter from "./Components/Footer/MyFooter";


function App() {

  return (
    <>
      <div className="homepage">
        <Navbar />
        <Infocontent />
      </div>
      <div className="Whole_div" style={{ backgroundImage: `url(${pattern})` }}>
        <About />
        <Event />
        <FAQ />
        <PrizeSection />
        <QuestGallery />
      </div>
      <MyFooter />
    </>
  )
}

export default App

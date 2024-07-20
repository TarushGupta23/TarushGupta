import Navbar from './components/navbar/Navbar';
import Loader from './components/loader/Loader';
import Experience from './Experience';
import CupHtml from './components/cup/CupHtml';
import ComputerHtml from './components/computer/ComputerHtml';
import IphoneHtml from './components/iphone/iphoneHtml';
import AlexaHtml from './components/alexa/alexaHtml';

function App() {
  return <>
    <Navbar />
    <Experience />
    <Loader />
    {/* <CupHtml /> */}
    {/* <ComputerHtml /> */}
    {/* <IphoneHtml /> */}
    <AlexaHtml />
  </>
}

export default App;

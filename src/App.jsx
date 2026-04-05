import Dock from "#components/Dock"
import Navbar from "#components/Navbar"
import Welcome from "#components/Welcome"
import { Draggable } from "gsap/Draggable"
import gsap from "gsap"
import { Contact, Finder, ImageWindow, Resume, Safari, Terminal , Text} from "#windows"


gsap.registerPlugin(Draggable);
function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageWindow />
      <Contact />
    </main>
  )
}

export default App
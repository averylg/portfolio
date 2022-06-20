import Navbar from "../components/Navbar.js"
import Specs from "../components/Specs.js";

export default function Paravoid() {
  return (
    <div>
      <Navbar />
      <Specs
        name="Paravoid"
        language="C#"
        library="Unity 3D"
        desc="This was a horror-platformer game led by Ethan Yu and Sara Inani. I coded the pathfinding functionality of the monster in
        the game using Unity NavMesh components and baking the components properly into the scenes the monster was in."
        url="https://vgdevgatech.wixsite.com/website/paravoid"
        siteName="Paravoid VGDev Site and Download"
      />
    </div>
  )
}
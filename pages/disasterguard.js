import Navbar from "../components/Navbar.js"
import Specs from "../components/Specs.js";

export default function DisasterGuard() {
  return (
    <div>
      <Navbar />
      <Specs
        name="DisasterGuard"
        language="C#"
        library="Unity 3D"
        desc="DisasterGuard was an entry for the Ludum Dare 50 Game Jam that I along with 9 others created in 72 hours. This is a first-person shooter
        survival game where the player has to survive waves of enemies storming in while also delaying disasters in their base. I
        coded the damage mechanic for the lava in the game, and I also programmed the rising and lowering mechanics of lava in the base, which are
        triggered by an interactable object. If the player moves too far away from the object too early, lava will continue to rise. If not, the lava
        will lower down. DisasterGuard placed 394th overall out of 2902 entries in Ludum Dare 50."
        url="https://ldjam.com/events/ludum-dare/50/disasterguard"
        siteName="DisasterGuard Ludum Dare 50 Entry"
      />
    </div>
  )
}
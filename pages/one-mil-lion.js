import Navbar from "../components/Navbar.js"
import Specs from "../components/Specs.js";

export default function OneMilLion() {
  return (
    <div>
      <Navbar />
      <Specs
        name="One Mil-Lion"
        language="C#"
        library="Unity 2D"
        desc="I teamed up with Ethan Yu, Daniel Carr, Tamjid Houssain, and Aneet Nadella to create One Mil-Lion, a top-down shooter featuring 
        a dragon fighting waves of lions, in 48 hours for the VGDev Summer 2021 Game Jam. I was responsible for coding the movement and fire-breathing
        mechanics for the dragon, including fuel depletion, fuel recharge, and automatic deletion of the flame projectile objects. 
        I also programmed the main menu into the game. Our team won the Judges' Choice Award for our game."
        url="https://itch.io/jam/vgdev-summer-2021-jam/rate/1121010"
        siteName="One Mil-Lion: VGDev Summer 2021 Game Jam Entry"
      />
    </div>
  )
}
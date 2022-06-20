import Navbar from "../components/Navbar.js"
import Specs from "../components/Specs.js";

export default function Evolution() {
  return (
    <div>
      <Navbar />
      <Specs
        name="Evolution: Arcade Map Capture Plugin"
        language="Java"
        library="Paper API (Spigot API Fork)"
        desc="I created this Minecraft plugin as part of Evolution: Arcade, a project for VGDev (Video Game Development Club). 
        This plugin lets the player summon a region selector tool which they can use to select two opposite vertices of a 
        cuboid region. Once the vertices are selected, the player can run a command that logs the cuboid dimensions and the 
        ordinal value of every single block in that region into a CSV file. Jason Lee, the project lead for the game and the 
        writer of its game engine, was able to use this plugin to bring 5 playable maps from Minecraft into Evolution: Arcade."
        url="https://github.com/averylg/evolutionmaps"
        siteName="Map Capture Plugin GitHub Repo"
      />
    </div>
  )
}
import Navbar from "../components/Navbar.js"
import Specs from "../components/Specs.js";

export default function SFMLPong() {
  return (
    <div>
      <Navbar />
      <Specs
        name="SFML Pong"
        language="C++"
        library="Simple Fast Multimedia Library (SFML)"
        desc="I created a 2-player Pong clone in about 2 hours using the Simple Fast Multimedia Library in C++. This game contains basic
        object collision, a game loop, and a state machine with a start state, gameplay state, win states for each player, and a pause state."
      />
    </div>
  )
}
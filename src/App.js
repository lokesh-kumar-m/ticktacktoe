import PlayerDetails from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {  
  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <PlayerDetails initialName="Player 1" symbol="x"/>
         <PlayerDetails initialName="Player 2" symbol="0"/>
        </ol>
        <GameBoard/>
      </div>
    </main>
  )
}

export default App

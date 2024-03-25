import { useState } from "react"
import PlayerDetails from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/Gameover"

const iNITIAL_BOARD=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

const  PLAYERS={x:"player 1",o:"player 2"}


function determineActivePlayer(playerLogs) {
  let playerSymbol = 'x'
  if (playerLogs.length > 0 && playerLogs[0].player == 'x') {
    playerSymbol = 'o'
  }
  return playerSymbol
}

function determinWinner(gameBoard,playerNames){
  for(const combinations of WINNING_COMBINATIONS){
    const firstSymbol=gameBoard[combinations[0].row][combinations[0].column]
    const secondSymbol=gameBoard[combinations[1].row][combinations[1].column]
    const thirdSymbol=gameBoard[combinations[2].row][combinations[2].column]
    
    if(firstSymbol && 
      firstSymbol===secondSymbol && 
      firstSymbol===thirdSymbol){
      return playerNames[firstSymbol]
    }
  }
  return
}

function App() {
  const [playerNames,setNames]=useState(PLAYERS)
  const [playerLogs, setLogs] = useState([])
  const activePlayerSymbol=determineActivePlayer(playerLogs)

  let gameBoard=[...iNITIAL_BOARD.map((inner)=>[...inner])]
    for(const element of playerLogs){
        const {box,player}=element
        gameBoard[box.row][box.col]=player
    }
    
  function handleSelectedPlayer(rowidx, colidx) {
    setLogs((prevLogs) => {
      let symbol = determineActivePlayer(prevLogs)
      const updatedLog = [
        {
          box: { row: rowidx, col: colidx },
          player: symbol
        },
        ...prevLogs,
      ]
      return updatedLog
    })
  }
  const winner=determinWinner(gameBoard,playerNames)
  const isDraw=playerLogs.length==9 && !winner

  function handleRematch(){
    setLogs([])
  }

  function handleNameChange(symbol,name){
    setNames((prevPlayerNames)=>{
      return {...prevPlayerNames,
      [symbol]:name}
    })
  }

  return (
    <main>
      
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerDetails 
          initialName={PLAYERS.x}
          symbol="x" 
          isActive={activePlayerSymbol === 'x'} 
          changeName={handleNameChange}
          />
          <PlayerDetails 
          initialName={PLAYERS.o}
          symbol="o" 
          isActive={activePlayerSymbol === 'o'} 
          changeName={handleNameChange}
          />
        </ol>
        {(winner||isDraw)&&<GameOver winner={winner} rematch={handleRematch}/>}
        <GameBoard
          onSelectSquare={handleSelectedPlayer}
          board={gameBoard} />
      </div>
      <Log gameLog={playerLogs} />
    </main>
  )
}

export default App

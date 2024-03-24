import { useState } from "react"

const initialBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

const GameBoard=()=>{
    const [gameBoard,setPosition]=useState(initialBoard)
    
    function selectedPosition(rowindx,colindx){
        setPosition((prevGameBoard)=>{
            const updatedBoard=[...prevGameBoard.map(innerBoard=>[...innerBoard])]
            updatedBoard[rowindx][colindx]="x"
            return updatedBoard
        })
    }
    return(
        <ol id="game-board">
            {gameBoard.map(
                (row,rowindx)=> 
                <li key={rowindx}>
                    <ol>
                        {row.map(
                            (playersymbol,colindx)=><li key={colindx}>
                                <button onClick={()=>selectedPosition(rowindx,colindx)}>{playersymbol}</button>
                            </li>
                        )}
                    </ol>
                </li> 
            )}
        </ol>
    )
}

export default GameBoard
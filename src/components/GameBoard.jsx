


const GameBoard=({onSelectSquare,board})=>{
    

    return(
        <ol id="game-board">
            {board.map(
                (row,rowindx)=> 
                <li key={rowindx}>
                    <ol>
                        {row.map(
                            (playersymbol,colindx)=><li key={colindx}>
                                <button 
                                onClick={()=> onSelectSquare(rowindx,colindx) }
                                disabled={playersymbol!==null}
                                >
                                    {playersymbol}
                                </button>
                            </li>
                        )}
                    </ol>
                </li> 
            )}
        </ol>
    )
}

export default GameBoard
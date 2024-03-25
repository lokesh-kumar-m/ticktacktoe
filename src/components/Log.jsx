
const Log = ({ gameLog }) => {

    return (
        <ol id='log'>
            {gameLog.map((log, id) => <li key={id}>Player: {log.player} selected: {log.box.row},{log.box.col}</li>)}
        </ol>
    )
}

export default Log  
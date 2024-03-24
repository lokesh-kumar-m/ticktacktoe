import { useState } from "react";

const PlayerDetails = ({initialName,symbol}) => {
    const [playerName,setName]=useState(initialName)
    const [editFlag,setEditFlag]=useState(false)
    function handleEditing(){
        setEditFlag((editFlag)=>!editFlag);
    } 
    function handleNamechange(event){
        setName(event.target.value)
    }
    return (
        <li>
            <span className="player">
                {editFlag?<input type="text" value={playerName} onChange={handleNamechange}/> :<span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{editFlag?"Save":"Edit"}</button>
        </li>
    );
}
export default PlayerDetails;
import React from "react";

const DeleteButton = ({clearTasks}) =>{

return (
    <div>
        <button className="btn" onClick={clearTasks}>Eliminar TODOS</button>
    </div>
)

}

export default DeleteButton;


import React, { useState } from "react";
import CreateUser from "./CreateUser";
import Todos from "./Todos";
import DeleteButton from "./DeleteButton";

//create your first component
const Home = () => {

	const [createdUserName, setCreatedUserName] = useState("");
	const [tasks, setTasks] = useState ([]);

	const clearTasks = async () => {
        try {
            const response = await fetch (`https://playground.4geeks.com/todo/users/${createdUserName}`, {
                method: "DELETE",
                headers: {
                    "accept": "application/json"
                }
            });
            console.log(`${createdUserName} Eliminado`);
            setTasks([]);
            setCreatedUserName("")
        } catch (error) {
            console.log(error);
        }
    };
	
	return (
	<div>
		<CreateUser nameInHome={setCreatedUserName} />
		<Todos userName={createdUserName} tasks={tasks} setTasks={setTasks} />
		<DeleteButton clearTasks={clearTasks} />
	</div>

	);
};

export default Home;

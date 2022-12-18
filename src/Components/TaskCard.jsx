
import {TaskContext} from "../context/TaskContext"
import { useContext } from "react"

function TaskCard({task}) {
  const {deleteTask}=useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white rounded-md p-4"  >
            <h1 className="text-xl font-bold  capitalize">{task.title}</h1>
            <p className="text-gray-500 text-sm">{task.descripcion}</p>
            <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 " onClick={()=> deleteTask(task.id)}>Eliminar Tarea</button>
        </div>
  )
}

export default TaskCard
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle("");
    setDescripcion("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold text-center mb-3 text-white ">
          Crear tu Tarea
        </h1>
        <input
          placeholder="Escriba tu tarea"
          className=" bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="escribe descripcion de la tarea"
          className=" bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;

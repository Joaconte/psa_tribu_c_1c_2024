import ProyectLayer from "@/components/projectLayer";
import TaskLayer from "@/components/taskLayer";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Task() {

  const router = useRouter();
  const [task, setTask] = useState([])
  var taskCode = router.query.taskCode;

  useEffect(() => {
    const fetchTask = async () => {
      taskCode = router.query.taskCode;
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskCode}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTask(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchTask();
  }, []);

  return (
      <TaskLayer task = {task}/>
  )
}

/*
export default function Proyecto() {


  return (
    <div className="mt-8 flex h-full flex-col space-x-0 space-y-15 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Tarea</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">
        <div className="space-y-2">
            <label className="">Código: </label>
        </div>
        <div className="space-y-2">
            <label className="">Desarrollador a cargo: </label>
        </div>
        <div className="space-y-2">
            <label className="">Estado: </label>
        </div>
        <div className="space-y-2">
          <label className="">Prioridad: </label>
        </div>
        <div className="space-y-2">
            <label className="">Descripción: </label>
        </div>
        <div className="space-y-2">
            <label className="">Fecha de inicio: </label>
        </div>
        <div className="space-y-2">
            <label className="">Fecha de finalizacion estimada: </label>
        </div>
        <div className="flex justify-center items-center bg-white space-x-10">        
          <a type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href={`/tarea/editarTarea`}>Actualizar datos</a>
        </div>
      </div>
    </div>
  )
}

*/
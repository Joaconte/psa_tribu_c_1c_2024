import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { TaskFormEdition } from '@/components/taskForm/taskFormEdition';
import LoadingScreen from "@/components/loadingScreen"


export default function EditarTarea() {

  const router = useRouter();
  const [task, setTask] = useState();  
  const [loading, setLoading] = useState(true);
  var taskCode = router.query.taskCode;

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskCode}`)
        console.log(response)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTask(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
    fetchTask();
  }, [taskCode]);

  if (loading) {
    return <LoadingScreen/>
  }

  if (!task) {
    return <div>Error al cargar la tarea</div>;
  }
  
  return(
    <div className="mt-8 flex h-full flex-col space-x-0 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Actualizar informacion</h1>
      <div className="container max-w-7xl">
        <BrowserRouter>
          <TaskFormEdition task={task}/>
        </BrowserRouter>
      </div>      
    </div>
  )
}
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { TaskFormEdition } from '@/components/taskForm/taskFormEdition';
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem } from '@/utils/fetchFunction';


export default function EditarTarea() {

  const router = useRouter();
  const [task, setTask] = useState();  
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  var taskCode = router.query.taskCode;
  console.log("1", taskCode)

  useEffect(() => {

    url = `/recursos`
    fetchItem(url, "resource",setResources, setLoading)
    
    var url = `/tasks/${taskCode}`
    fetchItem(url, "task",setTask, setLoading)

  }, [taskCode]);


  if (loading) {
    return <LoadingScreen/>
  }

  if (!task) {
    return <div>Error al cargar la tarea</div>;
  }
  
  console.log("2", taskCode)
  return(
    <div className="mt-8 flex h-full flex-col space-x-0 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Actualizar informacion</h1>
      <div className="container max-w-7xl">
        <BrowserRouter>
          <TaskFormEdition task={task} resources={resources}/>
        </BrowserRouter>
      </div>      
    </div>
  )
}
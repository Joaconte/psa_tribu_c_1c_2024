import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { TaskFormEdition } from '@/components/taskForm/taskFormEdition';
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem, fetchResource } from '@/utils/fetchFunction';
import { Task } from '@/utils/types';


export default function EditarTarea() {

  const router = useRouter();
  const [task, setTask] = useState<Task>();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  var taskCode = router.query.taskCode;

  const loadResource = async () => {

    if (resources && task){

      const resource = resources.find(resource => resource["legajo"] === task?.employeeCode);
      var employee = ""
      if (resource)
        employee = `${resource["Nombre"]} ${resource["Apellido"]}`
      setTask((prev: any) => ({ ...prev, employee: employee }))
      setLoading(false);
    }
  };

  useEffect(() => {
    const url= `/tasks/${taskCode}`
    fetchItem(url, "task",setTask, loadResource)
  }, [taskCode, resources]);

  if (loading || !task?.employee) {
    fetchResource(setResources)
    return <LoadingScreen/>

  } else if (!task) {
    return <div>Error al cargar la tarea</div>;

  } else
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
import { useEffect, useState } from "react"
import { TaskFormCreation } from "@/components/taskForm/taskFormCreation"
import { BrowserRouter } from "react-router-dom"
import { Task } from "@/utils/types";
import { useRouter } from "next/router";
import LoadingScreen from "@/components/loadingScreen"
import { fetchResource } from "@/utils/fetchFunction";

export default function NuevaTarea() {

  const router = useRouter();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const projectCode = router.query.projectCode; 

  const [task, setTask] = useState<Task>({
    taskCode: "",
    projectCode: "",
    name: "",
    status: "NEW",
    description: "",
    employeeCode: "",
    startDate: "",
    endDate: "",
    priority: "LOW",
    employee: "",
  });


  useEffect(() => {
    fetchResource(setResources, null)
    setLoading(false)

    setTask(prevTask => ({
      ...prevTask,
      projectCode: projectCode as string,
    }));

  }, [projectCode]);
  
  if (loading) {
    return <LoadingScreen/>
  }else 
    return (
      <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
        <h1 className="text-4xl mb-5 font-bold ">Nueva tarea</h1>
        <div className="container max-w-7xl mx-auto mt-8 space-y-7">
        
        <BrowserRouter>
          <TaskFormCreation task={task} resources={resources}/>
        </BrowserRouter>
        
        </div>
      </div>
    )
}

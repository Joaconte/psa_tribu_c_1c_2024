import { useEffect, useState } from "react"
import { TaskFormCreation } from "@/components/taskForm/taskFormCreation"
import { BrowserRouter } from "react-router-dom"
import { Task } from "@/utils/types";
import { useRouter } from "next/router";
import { BackButton } from "@/components/buttons";

export default function NuevaTarea() {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const projectCode = router.query.projectCode as string; 

  const [task] = useState<Task>({
    taskCode: "",
    projectCode: projectCode,
    name: "",
    status: "Nueva",
    description: "",
    employeeCode: "",
    startDate: "",
    endDate: "",
    priority: "Baja",
  });


  useEffect(() => {
    const waitUntilLoad = async () => {
      try {
        setLoading(false); 
          return(
            <BrowserRouter>
              <BackButton text={""}/>
            </BrowserRouter>
          )
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
    waitUntilLoad();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Nueva tarea</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">
      
      <BrowserRouter>
        <TaskFormCreation task={task}/>
      </BrowserRouter>
      
      </div>
    </div>
  )
}
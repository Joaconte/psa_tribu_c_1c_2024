import { useEffect, useState } from "react"
import { TaskFormCreation } from "@/components/taskForm/taskFormCreation"
import { BrowserRouter } from "react-router-dom"
import { Task } from "@/utils/types";
import { useRouter } from "next/router";
import { BackButton } from "@/components/buttons";
import LoadingScreen from "@/components/loadingScreen"

export default function NuevaTarea() {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState();
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

  const url2 = process.env.RECURSOS
  const url = "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos";

  useEffect(() => {

    const fetchResources = async () => {

      fetch(`${url2}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'User-agent': 'learning app',
        },
        }).then(response => {
        if (!response.ok) {
            return response.json().then(errorInfo => Promise.reject(errorInfo));
            }
        return response.json();
        })
        .then(data => {
            console.log('Project updated successfully:', data);
        })
        .catch(error => {
            console.error('Error creating project:', error);
        });    


    };

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
    fetchResources();
    console.log(resources)
  }, []);

  if (loading) {
    return <LoadingScreen/>
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

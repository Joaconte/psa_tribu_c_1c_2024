import { useEffect, useRef, useState } from "react"
import TaskGridCell from "@/components/taskGridCell"
import { BackButton, ContinueButton } from "@/components/buttons"
import { useRouter } from 'next/router'
import { ProjectStatus, TaskStatus } from "@/utils/enums"
import LoadingScreen from "@/components/loadingScreen"
import { BrowserRouter } from "react-router-dom"
import { getEnumValueFromString, parseTaskStatusToESP } from "@/utils/enumFunctions"

function HeaderItem({ title }: { title: string }) {
  return <tr>
          <th className="px-12 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-50 ">{title}</th>
        </tr>
}

export default function Tareas() {

  const router = useRouter();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const projectCode = router.query.projectCode;
  const projectStatus = router.query.projectStatus;
  
  useEffect(() => {

    const fetchTasks = async () => {

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${projectCode}/tasks`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setList(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    fetchTasks();
  }, [projectCode, projectStatus]);
    
  if (loading) {
    return <LoadingScreen/>
  }

  if (!list) {
    return <div>Error al cargar las tareas</div>; 
  }


  function TasksPerColumn({ estado }: { estado: TaskStatus }){
    return <> 
    {list.filter((tarea)=> getEnumValueFromString( TaskStatus, tarea['status']) == estado)
    .map((tarea) => (
      <tr key={tarea['taskCode']} >
        <TaskGridCell tarea={tarea} />
      </tr>
    ))}
    </>
  }
  
    function NewTaskButton({ projectStatus, projectCode }: { projectStatus: any, projectCode: any }){
    if (getEnumValueFromString(ProjectStatus, projectStatus) === ProjectStatus.INITIATED){
      return <ContinueButton text="Nueva tarea" href = {`/proyectos/${projectCode}/tareas/nuevaTarea`}/>
    }
      return null;
    }

  function Column({ estado }: { estado: TaskStatus }) {
    return (

      <table className="min-w-ful">
        <thead>
          <HeaderItem title = {parseTaskStatusToESP(TaskStatus[estado]).toUpperCase()} />
        </thead>
        <tbody className="min-w-full border">
          <TasksPerColumn estado={estado}/>
        </tbody>
      </table>
      )
  }

  return (
    <>
      <div className="container max-w-7xl mt-8 space-y-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Tareas</h1>
        </div>
          <div className="flex">
            <div className="space-y-6 h-screen sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ">
              <div className="grid grid-cols-4 inline-block min-w-full overflow-scroll overflow-x-hidden border-b border-gray-200 shadow sm:rounded-lg  ">
          
                <Column estado={TaskStatus.NEW}/>
                <Column estado={TaskStatus.IN_PROGRESS}/>
                <Column estado={TaskStatus.CLOSED}/>
                <Column estado={TaskStatus.LOCKED}/>

              </div>
              <div className="flex justify-center items-center bg-white space-x-10"> 
                <BrowserRouter>
                  <BackButton text = "Volver"/>
                </BrowserRouter>
                <NewTaskButton projectStatus={projectStatus} projectCode={projectCode} />
              </div>
            </div>
          </div>
      </div>
    </>
  )
  
}

import { useEffect, useState } from "react"
import TaskGridCell from "@/components/taskColumn"
import { BackButton, ContinueButton } from "@/components/buttons"
import { useRouter } from 'next/router'
import { ProjectStatus, ProjectStatusESP, TaskStatus } from "@/utils/enums"
import LoadingScreen from "@/components/loadingScreen"
import { BrowserRouter } from "react-router-dom"
import { getEnumValueFromString, parseToEsp, projectStatusColor } from "@/utils/enumFunctions"
import TaskColumn from "@/components/taskColumn"
import { fetchItem } from "@/utils/fetchFunction"

function NewTaskButton({ projectStatus, projectCode }: { projectStatus: any, projectCode: any }){
  if (getEnumValueFromString(ProjectStatus, projectStatus) === ProjectStatus.INITIATED){
    return <ContinueButton text="Nueva tarea" href = {`/proyectos/${projectCode}/tareas/nuevaTarea`}/>
  }
    return null;
  }

export default function Tareas() {

  const router = useRouter();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const projectCode = router.query.projectCode;
  const projectStatus = router.query.projectStatus;
  const projectName = router.query.projectName;
  
  useEffect(() => {

    const url = `/projects/${projectCode}/tasks`
    fetchItem(url, "tasks",setTasks, setLoading)
  
  }, [projectCode, projectStatus]);
    
  if (loading) {
    return <LoadingScreen/>
  }

  if (!tasks) {
    return <div>Error al cargar las tareas</div>; 
  }
  function ShowTasks(){
    if (tasks.length == 0){
    return (<div>
      <h1 className="text-2xl"> Este proyecto se encuentra sin tareas</h1>
    </div>)
    }else 
    return(
      <div className="grid grid-cols-4 max-h-[75%] max-w-full overflow-y-auto border-gray-200 shadow sm:rounded-lg">
        <TaskColumn estado={TaskStatus.NEW} list={tasks} projectStatus={projectStatus}/>
        <TaskColumn estado={TaskStatus.IN_PROGRESS} list={tasks} projectStatus={projectStatus}/>
        <TaskColumn estado={TaskStatus.CLOSED} list={tasks} projectStatus={projectStatus}/>
        <TaskColumn estado={TaskStatus.LOCKED} list={tasks} projectStatus={projectStatus}/>
      </div>
    )
}

  function Status(){
      const className = "text-2xl font-bold decoration-gray-400 " + projectStatusColor(projectStatus)
      return <h2 className={className}>{parseToEsp(projectStatus, ProjectStatus, ProjectStatusESP)}</h2>
  }

  return (
    <>
      <div className="container max-w-7xl mt-8 space-y-6" >
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">{projectName} - Tareas</h1>
          <Status/>
        </div>
          <div className="flex">
            <div className="space-y-6 h-screen sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">  
              <ShowTasks/>
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
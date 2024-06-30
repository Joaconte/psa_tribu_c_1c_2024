import { getEnumValueFromString, parseTaskPriorityToESP, parseTaskStatusToESP } from "@/utils/enumFunctions"
import { ProjectStatus } from "@/utils/enums"
import { Resource, Task } from "@/utils/types"
import { BrowserRouter } from "react-router-dom"
import { BackButton, ContinueButton, DeleteButton } from "./buttons"

function Label({text, value}: {text: string, value: string}){
    return(
        <div className="space-y-2">
          <label className="">{text} {value}</label>
        </div>
    )
  }

  function H1({value}: {value: string}){
    return(
        <h1 className="text-4xl mb-5 font-bold ">{value}</h1>
    )
  }

  function ButtonsInitiatedProyect({ projectStatus, projectCode, taskCode }: { projectStatus: any, projectCode: any, taskCode:any }){
    if (getEnumValueFromString(ProjectStatus, projectStatus) === ProjectStatus.INITIATED){
      return (<>
        <DeleteButton text = "Eliminar tarea" art = "la" item = "tarea" url = {`/tasks/${taskCode}`}/>
        <ContinueButton text="Actualizar datos"
          href = {`/proyectos/${projectCode}/tareas/${taskCode}/editarTarea`}/>
      </>
      
      )
    }
      return null;
    }
  
  export default function TaskLayer({ task, projectStatus}: {task: Task, projectStatus:any}) {

    const taskStatus = parseTaskStatusToESP(task.status)
    const taskPriority = parseTaskPriorityToESP(task.priority)

    const url = `/tasks/${task.taskCode}`
  
    return (
        <div className="mt-8 flex h-fulls flex-col space-x-0 space-y-15 bg-white">
            <H1 value={task.name}/>
            <div className="container max-w-7xl mx-auto mt-8 space-y-7">
                <Label text="Código:" value={task.taskCode}/>
                <Label text="Estado:" value={taskStatus}/>
                <Label text="Prioridad:" value={taskPriority}/>
                <Label text="Empleado:" value={task.employee}/>
                <Label text="Descripción:" value={task.description}/>
                <Label text="Fecha de inicio:" value={task.startDate}/>
                <Label text="Fecha estimada de finalización:" value={task.endDate}/>
                <div className="flex justify-center items-center bg-white space-x-10"> 
                <BrowserRouter>
                  <BackButton text = "Volver"/>
                  <ButtonsInitiatedProyect projectStatus ={projectStatus} projectCode={task.projectCode} taskCode={task.taskCode} />
                </BrowserRouter>
               </div>
            </div>  
        </div>  
    )
  }
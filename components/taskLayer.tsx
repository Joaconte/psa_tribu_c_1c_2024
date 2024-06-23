import { parseTaskPriorityToESP, parseTaskStatusToESP } from "@/utils/enumFunctions"
import { Resource } from "@/utils/types"
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
  
  export default function TaskLayer({ task, resources}: {task: any, resources:Resource[]}) {

    const taskStatus = parseTaskStatusToESP(task['status'])
    const taskPriority = parseTaskPriorityToESP(task['priority'])
    const resource = resources.find(resource => resource["legajo"] === task["employeeCode"]);
    var taskEmployee = ""
    
    if (resource)
      taskEmployee = `${resource["Nombre"]} ${resource["Apellido"]}`

    const url = `/tasks/${task['taskCode']}`
  
    return (
        <div className="mt-8 flex h-fulls flex-col space-x-0 space-y-15 bg-white">
            <H1 value={task['name']}/>
            <div className="container max-w-7xl mx-auto mt-8 space-y-7">
                <Label text="Código:" value={task['taskCode']}/>
                <Label text="Estado:" value={taskStatus}/>
                <Label text="Prioridad:" value={taskPriority}/>
                <Label text="Empleado:" value={taskEmployee}/>
                <Label text="Descripción:" value={task['description']}/>
                <Label text="Fecha de inicio:" value={task['startDate']}/>
                <Label text="Fecha estimada de finalización:" value={task['endDate']}/>
                <div className="flex justify-center items-center bg-white space-x-10"> 
                <BrowserRouter>
                  <BackButton text = "Volver"/>
                  <DeleteButton text = "Eliminar tarea" item = "tarea" url = {url}/>
                </BrowserRouter>
                <ContinueButton text="Actualizar datos"
                  href = {`/proyectos/${task['projectCode']}/tareas/${task["taskCode"]}/editarTarea`}/>
               </div>
            </div>  
        </div>  
    )
  }
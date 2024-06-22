import Link from "next/link"
import { BrowserRouter } from "react-router-dom"
import { BackButton, ContinueCodeProjectAndTaskButton } from "./buttons"

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
  
  export default function TaskLayer({ task }: {task: any}) {
  
    return (
        <div className="mt-8 flex h-fulls flex-col space-x-0 space-y-15 bg-white">
            <H1 value={task['name']}/>
            <div className="container max-w-7xl mx-auto mt-8 space-y-7">
                <Label text="Código:" value={task['taskCode']}/>
                <Label text="Estado:" value={task['status']}/>
                <Label text="Prioridad:" value={task['priority']}/>
                <Label text="employeeCode:" value={task['employeeCode']}/>
                <Label text="Descripción:" value={task['description']}/>
                <Label text="Fecha de inicio:" value={task['startDate']}/>
                <Label text="Fecha estimada de finalización:" value={task['endDate']}/>
                <div className="flex justify-center items-center bg-white space-x-10"> 
                <BrowserRouter>
                  <BackButton text = "Volver"/>
                </BrowserRouter>
                <ContinueCodeProjectAndTaskButton text="Actualizar datos" taskCode={task["taskCode"]} projectCode={task['projectCode']} path={"/editarTarea"}/>
                </div>
            </div>  
        </div>  
    )
  }
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import {InputText, OptionsList, Description, Date} from "@/components/editLayerComponents" 
import { CancelButton, ContinueButton } from "@/components/buttons"

export default function EditarTarea() {
  return (

    <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Modificar tarea</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">
          
            
        <InputText label="Título" placeholder="Ingrese el título"/>

        <OptionsList label = "Estado" options = {["Nueva", "En progreso", "Cerrada", "Bloqueada"]}/>

        <Description/>

        <OptionsList label = "Desarrollador designado" options = {["Placeholder", "Placeholder", "Placeholder", "Placeholder"]}/>

        <Date/>
        
        <div className="flex justify-center items-center bg-white space-x-10">   
        <CancelButton/>     
        <ContinueButton text = "Aplicar cambios" href="/tareas"/>     
        </div>
      </div>
    </div>
  )
}
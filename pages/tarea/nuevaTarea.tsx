import Image from "next/image"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import { CancelButton, ContinueButton } from "@/components/buttons"
import {InputText, OptionsList, TextArea, InputDate} from "@/components/editLayerComponents" 

export default function NuevaTarea() {
  return (

    <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">NuevaTarea</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">
          
        <InputText label = "Título" placeholder="Ingrese el título"/>

        <OptionsList label = "Desarrollador designado" options = {["Placeholder", "Placeholder", "Placeholder", "Placeholder"]}/>

        <OptionsList label = "Estado" options = {["Nueva", "En progreso", "Cerrada", "Bloqueada"]}/>

        <OptionsList label = "Prioridad" options = {["Baja", "Media", "Alta"]}/>

        <TextArea label = "Descripción" placeholder="Ingrese la descripción..."/>

        <InputDate/>
      
        <div className="flex justify-center items-center bg-white space-x-10">        
          <CancelButton/>     
          <ContinueButton text = "Crear nueva tarea" href="/tareas"/>     
        </div>
      </div>
    </div>
  )
}
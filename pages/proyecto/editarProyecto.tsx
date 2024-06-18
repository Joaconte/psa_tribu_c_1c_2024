import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import { CancelButton, ContinueButton } from "@/components/buttons"
import {InputText, OptionsList, Description, Date} from "@/components/editLayerComponents" 

export default function EditarProyecto() {
  return (

    <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Modificar proyecto</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">
          
        
        <InputText label="Título" placeholder=""/>

        <OptionsList label = "Estado" options = {["Iniciado", "Suspendido", "Terminado"]}/>

        <Description/>

        <OptionsList label = "Lider" options = {["A", "B", "C", "D", "E"]}/>

        <Date/>
        
        <div className="flex justify-center items-center bg-white space-x-10">   
        <CancelButton/>     
        <ContinueButton text = "Aplicar cambios" href="/proyectos"/>      
        </div>
      </div>
    </div>
  )
}
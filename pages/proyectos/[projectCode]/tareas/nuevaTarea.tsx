import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import { CancelButton, ContinueButton } from "@/components/buttons"
import {InputText, OptionsList, TextArea, InputDate} from "@/components/editLayerComponents" 

export default function NuevaTarea() {

  const [list, setList] = useState([])
  useEffect(() => {
    const url = "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos"
    const fetchProjects = async () => {
      try {
        const response = await fetch(url, {
	        'mode': 'no-cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	});
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);


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
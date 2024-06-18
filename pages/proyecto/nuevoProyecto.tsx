import RecursoItemSelect from "@/components/recursoItemSelect"
import { CancelButton, ContinueButton } from "@/components/buttons"
import {InputText, OptionsList, TextArea, InputDate} from "@/components/editLayerComponents" 
import { Recurso } from "@/types/types";

import { useRouter } from "next/router";

import { useEffect, useState } from "react"

export default function NuevoProyecto() {

  const [list, setList] = useState([])

  const [resources, setResources] = useState<Recurso[]>([]);

  const router = useRouter();


  useEffect(() => {
    const fetchResources = async () => {
      const url = "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos";
      try {
        const response = await fetch(`${url}/nuevoProyecto`);
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  return (

    <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Nuevo proyecto</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">
          
        <InputText label="Título" placeholder="Ingrese el título"/>

        <OptionsList label = "Estado" options = {["Iniciado", "Suspendido", "Terminado"]}/>

        <TextArea label = "Descripción" placeholder="Ingrese la descripción..."/>

        <OptionsList label = "Lider" options = {["SASA", "CSAD", "ASDQE"]}/>

        
        <div>
          {list.map((recurso) => (
          <RecursoItemSelect key={recurso['legajo']} recurso={recurso} />))}
        <div/>

        <InputDate/>
        
        <div className="flex justify-center items-center bg-white space-x-10">        
          <CancelButton/>     
          <ContinueButton text = "Crear nuevo proyecto" href="/proyectos"/>      
        </div>
      </div>
    </div>
  </div>
  )
}
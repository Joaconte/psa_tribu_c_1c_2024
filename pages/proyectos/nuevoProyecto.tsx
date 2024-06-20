import RecursoItemSelect from "@/components/recursoItemSelect"
import { CancelButton, ContinueButton } from "@/components/buttons"
import {InputText, OptionsList, TextArea, InputDate} from "@/components/editLayerComponents" 
import { Recurso } from "@/types/types";


import { useRouter } from "next/router";

import { useEffect, useState } from "react"


function createProject(){

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      projectCode: null,
      leaderCode: null,
      productCode: null,
      name: 'TEST2 FRONT',
      startDate: null,
      endDate: null,
      description: null,
      status: null,
    })
  })
}

export default function NuevoProyecto() {

  const [list, setList] = useState([])

  const [resources, setResources] = useState<Recurso[]>([]);

  const router = useRouter();

  return (

    <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Nuevo proyecto</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">

        <InputText id = "title" label="Título" placeholder="Ingrese el título"/>

        <OptionsList id = "state" label = "Estado" options = {["Iniciado", "Suspendido", "Terminado"]}/>

        <TextArea id = "description" label = "Descripción" placeholder="Ingrese la descripción..."/>

        <OptionsList id = "lider" label = "Lider" options = {["SASA", "CSAD", "ASDQE"]}/>

        
        <div>
          {list.map((recurso) => (
          <RecursoItemSelect key={recurso['legajo']} recurso={recurso} />))}
        <div/>

        <InputDate id = "date"/>

        <div className="flex justify-center items-center bg-white space-x-10">     

          <form onSubmit={createProject}>
            <button type="submit">Submit</button>
          </form>
          <CancelButton />     
          <ContinueButton text = "Crear nuevo proyecto" href="/proyectos"/>      
        </div>
      </div>
    </div>
  </div>
  )
}
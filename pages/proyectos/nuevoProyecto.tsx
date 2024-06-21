import { Recurso } from "@/types/types";

import { useEffect, useState } from "react"
import { BrowserRouter, useNavigate } from "react-router-dom";
import React from "react";
import { useRouter } from "next/router";
import { ProjectFormCreation } from "@/components/projectFormCreation";

const Index = (): JSX.Element => {
  const navigate = useNavigate();
  return(
    <>
      <button onClick={() => navigate("proyectos")}>proyectos</button>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

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
  const [loading, setLoading] = useState(true);
  var projectCode = router.query.projectCode;


  useEffect(() => {
    const waitUntilLoad = async () => {
      try {
        setLoading(false); 
          return(
            <BrowserRouter>
              <Index/>
            </BrowserRouter>
          )
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    waitUntilLoad();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Puedes mostrar un mensaje de carga o spinner aquí si lo deseas
  }

  return (


    <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Nuevo proyecto</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">
      
      <BrowserRouter>
      <ProjectFormCreation/>
      </BrowserRouter>
      
      </div>
    </div>
  )
}

/*

      <InputText id = "title" label="Título" placeholder="Ingrese el título"/>

      <OptionsList id = "state" label = "Estado" options = {["Iniciado", "Suspendido", "Terminado"]}/>

      <TextArea id = "description" label = "Descripción" placeholder="Ingrese la descripción..."/>

      <OptionsList id = "lider" label = "Lider" options = {["SASA", "CSAD", "ASDQE"]}/>


      <div>
        {list.map((recurso) => (
        <RecursoItemSelect key={recurso['legajo']} recurso={recurso} />))}
      </div>

      <InputDate id = "date"/>

        <div className="flex justify-center items-center bg-white space-x-10">     

          <form onSubmit={createProject}>
            <button type="submit">Submit</button>
          </form>
          
          <BrowserRouter>
            <BackButton text = "Cancelar"/>
          </BrowserRouter>
          <ContinueButton text = "Crear nuevo proyecto" href="/proyectos"/>      
        </div>

*/


import { DeleteButton, BackButton, ContinueButton } from "./buttons"
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Project, Resource } from "@/utils/types";
import { parseProjectStatusToESP } from "@/utils/enumFunctions";
import Link from "next/link";
import LoadingScreen from "./loadingScreen";
import { waitResource } from "@/utils/fetchFunction";

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


  
  export default function ProyectLayer({ project, resources }: {project: Project, resources:Resource[]}) {
  

    const [resource, setResource] = useState<Resource>()
    const [projectLeader, setProjectLeader] = useState<string>()
    const [loading, setLoading] = useState(true);

    const projectStatus = parseProjectStatusToESP(project.status)
    
    useEffect(() => {
      waitResource(resources, resource, project.leaderCode, 
        setResource, setProjectLeader, setLoading)
    }, [projectLeader, resources]);

    if (loading) {
      return <LoadingScreen/>
    }
    const url = `/projects/${project.projectCode}`

    return (
        <div className="mt-8 flex h-fulls flex-col space-x-0 space-y-15 bg-white">
            <H1 value={project['name']}/>
            <div className="container max-w-7xl mx-auto mt-8 space-y-7">
                <Label text="Código:" value={project.projectCode}/>
                <Label text="Estado:" value={projectStatus}/>
                <Label text="Lider:" value={projectLeader as string}/>
                <Label text="Descripción:" value={project.description}/>
                <Label text="Fecha de inicio:" value={project.startDate}/>
                <Label text="Fecha estimada de finalización:" value={project.endDate}/>
                <Link className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  href={{ pathname:`/proyectos/${encodeURIComponent(project.projectCode)}/tareas`,
                  query : `projectStatus=${project.status}&projectName=${project.name}`
                  }}>Ver tareas</Link>
                <div className="flex justify-center items-center bg-white space-x-10"> 
                <BrowserRouter>
                  <BackButton text = "Volver"/>
                  <DeleteButton text="Eliminar proyecto" art="el" item="poryecto" url={url}/>
                </BrowserRouter>
                <ContinueButton text="Actualizar datos" href = {`/proyectos/${project.projectCode}/editarProyecto`}/>
                </div>
            </div>  
        </div>  
    )
}
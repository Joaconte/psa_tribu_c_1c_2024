import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { ProjectFormCreation } from "@/components/projectForm/projectFormCreation";
import { BackButton } from "@/components/buttons";
import { Project, Resource } from "@/utils/types";
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem, fetchResource } from "@/utils/fetchFunction";

export default function NuevoProyecto() {
  
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState<Resource[]>([]);

  const [project] = useState<Project>({
    projectCode: "",
    leaderCode: "",
    productCode: "",
    name: "",
    startDate: "",
    endDate: "",
    description: "",
    status: "Iniciado",
    leader: ""
  });


  useEffect(() => {
    fetchResource(setResources)
    setLoading(false)
  }, []);

  if (loading) {
    return <LoadingScreen/>

  } else
    return (

      <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
        <h1 className="text-4xl mb-5 font-bold ">Nuevo proyecto</h1>
        <div className="container max-w-7xl mx-auto mt-8 space-y-7">
        
        <BrowserRouter>
          <ProjectFormCreation project={project} resources={resources}/>
        </BrowserRouter>
        
        </div>
      </div>
    )
}

import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { ProjectFormCreation } from "@/components/projectForm/projectFormCreation";
import { BackButton } from "@/components/buttons";
import { Project, Resource } from "@/utils/types";
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem } from "@/utils/fetchFunction";

export default function NuevoProyecto() {
  
  const [project] = useState<Project>({
    projectCode: "",
    leaderCode: "",
    productCode: "",
    name: "",
    startDate: "",
    endDate: "",
    description: "",
    status: "Iniciado",
  });

  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {

    const url = `/recursos`
    fetchItem(url, "resource",setResources, setLoading)

    const waitUntilLoad = async () => {
      try {
        setLoading(false); 
          return(
            <BrowserRouter>
              <BackButton text={""}/>
            </BrowserRouter>
          )
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    waitUntilLoad();
  }, []);

  if (loading) {
    return <LoadingScreen/>
  }

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

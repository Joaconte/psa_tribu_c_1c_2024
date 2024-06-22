import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { ProjectFormCreation } from "@/components/projectForm/projectFormCreation";
import { BackButton } from "@/components/buttons";
import { Project, Resource } from "@/utils/types";
import LoadingScreen from "@/components/loadingScreen"

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

    const url = "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos"

    const fetchResource = async () => {

        const response = await fetch(`${url}`)    
        .then(response => {
          console.log("Response: ", response)
          if (!response.ok) {
            return response.json().then(errorInfo => Promise.reject(errorInfo));
          }
          return response.json();
        })
        .then(data => {
          console.log('Project created successfully:', data);
          setResources(data);
          setLoading(false); 
        })
        .catch(error => {
          console.error('Error creating resources:', error);
        });
    };



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
    fetchResource();
    console.log(resources)
  }, []);

  if (loading) {
    return <LoadingScreen/>
  }

  return (

    <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Nuevo proyecto</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">
      
      <BrowserRouter>
        <ProjectFormCreation project={project}/>
      </BrowserRouter>
      
      </div>
    </div>
  )
}

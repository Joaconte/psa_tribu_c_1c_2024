import { Project, Recurso } from "@/types/types";

import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { useRouter } from "next/router";
import { ProjectFormCreation } from "@/components/projectForm/projectFormCreation";
import { BackButton } from "@/components/buttons";

export default function NuevoProyecto() {

  const [resources, setResources] = useState<Recurso[]>([]);
  
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

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  var projectCode = router.query.projectCode;


  useEffect(() => {
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
    return <div>Loading...</div>;
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

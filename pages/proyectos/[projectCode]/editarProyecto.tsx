import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { ProjectFormEdition } from '@/components/projectForm/projectFormEdition';
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem, fetchResource } from '@/utils/fetchFunction';


export default function EditarProyecto() {

  const router = useRouter();
  const [project, setproject] = useState(); 
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true);
  var projectCode = router.query.projectCode;

  useEffect(() => {

    fetchResource(setResources, setLoading)

    var url = `/projects/${projectCode}`
    fetchItem(url, "project",setproject, setLoading)

  }, [projectCode]);

  if (loading) {
    return <LoadingScreen/>
  }

  if (!project) {
    return <div>Error al cargar el proyecto</div>;
  }

  console.log(project)
  
  return(
    <div className="mt-8 flex h-full flex-col space-x-0 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Actualizar informacion</h1>
      <div className="container max-w-7xl">
        <BrowserRouter>
          <ProjectFormEdition project={project} resources={resources}/>
        </BrowserRouter>
      </div>      
    </div>
  )
}
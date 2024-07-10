import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ProjectFormEdition } from '@/components/projectForm/projectFormEdition';
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem, fetchResource } from '@/utils/fetchFunction';
import { Project } from '@/utils/types';


export default function EditarProyecto() {

  const router = useRouter();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [project, setproject] = useState<Project>();
  var projectCode = router.query.projectCode;

  const loadResource = async () => {

    if (resources && project){
      const resource = resources?.find(resource => resource["legajo"] === project?.leaderCode);
      var leader = ""
      if (resource)
        leader = `${resource["Nombre"]} ${resource["Apellido"]}`
      setproject((prev: any) => ({ ...prev, leader: leader }))
      setLoading(false)
    }
};

  useEffect(() => {
      const url = `/projects/${projectCode}`
      fetchItem(url, "project",setproject, loadResource)
  }, [projectCode, resources]);

  if (loading) {
    fetchResource(setResources, null)
    return <LoadingScreen/>
    
  }else if (!project) {
    return <div>Error al cargar el proyecto</div>;

  }else   
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
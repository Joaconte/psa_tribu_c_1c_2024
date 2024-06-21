import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { ProjectForm } from '@/components/projectForm';



const Index = (): JSX.Element => {
  const navigate = useNavigate();
  return(
    <>
      <button onClick={() => navigate("proyectos")}>proyectos</button>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}


export default function EditarProyecto() {

  const router = useRouter();
  const [project, setproject] = useState();  
  const [loading, setLoading] = useState(true);
  var projectCode = router.query.projectCode;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${projectCode}`)
        console.log(response)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setproject(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProject();
  }, [projectCode]);

  if (loading) {
    return <div>Loading...</div>; // Puedes mostrar un mensaje de carga o spinner aquí si lo deseas
  }

  if (!project) {
    return <div>Error al cargar el proyecto</div>; // Maneja la situación cuando no se puede cargar el proyecto
  }

  console.log(project)
  
  return(
    <div className="mt-8 flex h-full flex-col space-x-0 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Actualizar informacion</h1>
      <div className="container max-w-7xl">
        <BrowserRouter>
          <ProjectForm project={project}/>
        </BrowserRouter>
      </div>      
    </div>
  )
}
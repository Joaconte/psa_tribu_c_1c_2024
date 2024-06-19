import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import Link from "next/link";

import {PreChargedInputText, OptionsList, PreChargedTextArea, InputDate} from "@/components/editLayerComponents" 
import { CancelButton, ContinueButton } from "@/components/buttons"

export default function EditarProyecto() {

  const router = useRouter();
  const [project, setproject] = useState();
  var projectCode = router.query.projectCode;
  console.log(projectCode)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${projectCode}`);
        console.log(response)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setproject(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProject();
  }, []);
  console.log(project)
  
  return (

      <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
        <h1 className="text-4xl mb-5 font-bold ">Modificar proyecto</h1>
        <div className="container max-w-7xl mx-auto mt-8 space-y-7">
    
          <OptionsList label = "Estado" options = {["Iniciado", "Suspendido", "Terminado"]}/>
  
          <PreChargedTextArea label = "Descripción" input = "DESCRIPCION LALALA" />
  
          <OptionsList label = "Lider" options = {["A", "B", "C", "D", "E"]}/>
  
          <InputDate/>
          
          <div className="flex justify-center items-center bg-white space-x-10">   
              <CancelButton/>     
              <ContinueButton text = "Aplicar cambios" href="/proyectos"/>      
          </div>
        </div>
      </div>
    )


}


/*

  return (

    <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Modificar proyecto</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">

        <PreChargedInputText label = "Título" input = {project["status"]}/>

        <OptionsList label = "Estado" options = {["Iniciado", "Suspendido", "Terminado"]}/>

        <PreChargedTextArea label = "Descripción" input = "DESCRIPCION LALALA" />

        <OptionsList label = "Lider" options = {["A", "B", "C", "D", "E"]}/>

        <InputDate/>
        
        <div className="flex justify-center items-center bg-white space-x-10">   
            <CancelButton/>     
            <ContinueButton text = "Aplicar cambios" href="/proyectos"/>      
            <Link  className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline"
              href={{
                pathname: `/proyectos/${encodeURIComponent(project['projectCode'])}`,
                query: `${(project['projectCode'])}` // the data
              }}
            >{project['name']}
            </Link>
        </div>
      </div>
    </div>
  )
  */
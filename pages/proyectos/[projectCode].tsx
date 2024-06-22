import ProyectLayer from "@/components/projectLayer";
import { Project, Resource } from "@/utils/types";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loadingScreen"


export default function Proyecto() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [project, setproject] = useState<Project | null>(null);
  const [resources, setResources] = useState([])

  var projectCode = router.query.projectCode;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${projectCode}`);
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
    console.log(resources)

  }, [projectCode]);

  if (loading) {
    return <LoadingScreen/>
  }

  if (!project) {
    return <div>Error al cargar el proyecto</div>; // Maneja la situación cuando no se puede cargar el proyecto
  }

  return (
    <ProyectLayer project = {project}/>
  )
}
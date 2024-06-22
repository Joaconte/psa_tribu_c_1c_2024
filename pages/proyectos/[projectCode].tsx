import ProyectLayer from "@/components/projectLayer";
import { Project } from "@/utils/types";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";


export default function Proyecto() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [project, setproject] = useState<Project>({
    projectCode: "null",
    leaderCode: "null",
    productCode: "null",
    name: "null",
    startDate: "null",
    endDate: "null",
    description: "null",
    status: "null",
  });

  var projectCode = router.query.projectCode;

  useEffect(() => {
    const fetchProject = async () => {
      projectCode = router.query.projectCode;
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

  }, [projectCode]);


  if (loading) {
    return <div>Loading...</div>; // Puedes mostrar un mensaje de carga o spinner aquí si lo deseas
  }

  if (!project) {
    return <div>Error al cargar el proyecto</div>; // Maneja la situación cuando no se puede cargar el proyecto
  }

  return (
    <ProyectLayer project = {project}/>
  )
}
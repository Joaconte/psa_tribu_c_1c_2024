import ProyectLayer from "@/components/projectLayer";
import ProyectGridRow from "@/components/proyectGridRow";
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";


export default function Proyecto() {

  const router = useRouter();
  const [project, setproject] = useState([])
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
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProject();
  }, []);

  return (
      <ProyectLayer project = {project}/>
  )
}
import ProyectLayer from "@/components/projectLayer";
import { Project, Resource } from "@/utils/types";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem } from "@/utils/fetchFunction";


export default function Proyecto() {
  const router = useRouter();
  const [project, setproject] = useState<Project | null>(null);
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true);

  var projectCode = router.query.projectCode;

  useEffect(() => {
      var url = `/recursos`
      fetchItem(url, "resources",setResources, setLoading)

      url = `/projects/${projectCode}`
      fetchItem(url, "project",setproject, setLoading)
  }, [projectCode]);

  if (loading) {
    return <LoadingScreen/>
  }

  if (!project) {
    return <div>Error al cargar el proyecto</div>;
  }

  return (
    <ProyectLayer project = {project} resources = {resources}/>
  )
}
import ProyectLayer from "@/components/projectLayer";
import { Project, Resource } from "@/utils/types";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem, fetchResource } from "@/utils/fetchFunction";

export default function Proyecto() {
  const router = useRouter();
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true);
  const [project, setproject] = useState<Project>();

  const { projectCode } = router.query;

  const loadResource = async () => {

    if (resources && project){
      const resource = resources?.find(resource => resource["legajo"]  === project?.leaderCode);
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


  if (loading || (!project?.leader && project?.leaderCode)) {
    fetchResource(setResources)
    return <LoadingScreen/>

  }else if (!project) {
    return <div>Error al cargar el proyecto</div>;

  }else 
    return (
      <ProyectLayer project = {project}/>
    )
}
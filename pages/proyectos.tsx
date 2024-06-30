import { useEffect, useState } from "react"
import ProyectGridRow from "@/components/proyectGridRow"
import { ContinueButton } from "@/components/buttons"
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem, fetchResource } from "@/utils/fetchFunction"
import { Project } from "@/utils/types"


function HeaderItem({ title }: { title: string }) {
  return <th className="text-center px-6 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-50 ">{title}</th>
}

export default function Proyectos() {
  const [projects, setProjects] = useState<Project[]>()
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true);

  function getLeader(leaderCode: string){
    const resource = resources.find(resource => resource["legajo"] === leaderCode)
    if (resource)
      return `${resource["Nombre"]} ${resource["Apellido"]}`
    return '';
  }

  const loadResources = async () => {
    if (projects){
      setProjects(projects.map((prev: any) => ({ ...prev, leader: getLeader(prev.leaderCode) })))
      setLoading(false)
    }
  };
  
  useEffect(() => {
    const url = `/projects`
    fetchItem(url, "proyectos",setProjects, loadResources)
  }, [resources]); 
  
  
  if (loading) {
    fetchResource(setResources)     
    return <LoadingScreen/>
  }else if (!projects) {
    return <div>Error al cargar los proyectos</div>; 
  } else {

    const sortedProjects = projects.sort((a, b) => {
      return  parseInt(a['projectCode']) -  parseInt(b['projectCode']);
    });

    return(
        <div className="container max-w-7xl mt-8 space-y-6 ">
        <div className="mb-10 flex relative ">
            <h1 className="text-3xl font-bold decoration-gray-400">Proyectos</h1>
        </div>
        <div className="flex flex-col">
          <div className="space-y-6 h-screen sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8  ">
            <div className="inline-block max-h-[75%] overflow-y-auto --full min-w-full align-middle border-b border-gray-200 shadow sm:rounded-lg ">
              <table className="min-w-full  ">
                <thead className= "top-0">
                  <tr>
                    <HeaderItem title="CÓDIGO" />
                    <HeaderItem title="PROYECTO" />
                    <HeaderItem title="LÍDER" />
                    <HeaderItem title="FECHA DE INICIO" />
                    <HeaderItem title="FECHA DE FINALIZACIÓN" />
                    <HeaderItem title="ESTADO" />
                    <HeaderItem title="TAREAS" />
                  </tr>
                </thead>
                <tbody>
                  {sortedProjects.map((project) => ( 
                  <ProyectGridRow key={project['projectCode']} project={project} resources = {resources}/>
                  ))}
                </tbody>
              </table>                
            </div>
            <div className="space-x-10"> 
              <ContinueButton text = "Nuevo proyecto" href="/proyectos/nuevoProyecto"/> 
            </div>
          </div>
        </div>
    </div>
    )
  }
}

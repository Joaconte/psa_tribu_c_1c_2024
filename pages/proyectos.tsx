import { useEffect, useState } from "react"
import ProyectGridRow from "@/components/proyectGridRow"
import { ContinueButton } from "@/components/buttons"
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem } from "@/utils/fetchFunction"


function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-50 ">{title}</th>
}

export default function Proyectos() {
  const [projects, setProjects] = useState([])
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    var url = `/recursos`
    fetchItem(url, "resources",setResources, setLoading)
    
    url = `/projects`
    fetchItem(url, "projects",setProjects, setLoading)

  }, []);
  
  if (loading) {
    return <LoadingScreen/>
  }

  if (!projects) {
    return <div>Error al cargar los proyectos</div>; 
  }

  /*
    const filtrarPorNombre = () => {
      return list.filter((proyecto) => {
        return (proyecto["name"].toLowerCase().includes("a".toLowerCase()))
      });
    };
    */

  function buscador(){
    return(
      <div className="max-w-md mx-auto inset-y-0 end-20">   
      <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
      <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border 
      border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="Buscar por nombre..." onChange= {handleChange} />
    </div>
  </div>
    )
  }
  


  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    console.log(value)
    return(<Render sortedList={projects}/>)
  };

  const sortedList = projects.sort((a, b) => {
    return  parseInt(a['projectCode']) -  parseInt(b['projectCode']);
  });

  function Render({sortedList}: {sortedList: any[]}){
    return(
      <div className="container max-w-7xl mt-8 space-y-6 ">
      <div className="mb-10 flex relative ">
          <h1 className="text-3xl font-bold decoration-gray-400">Proyectos</h1>
      </div>
      <div className="flex flex-col">
        <div className="space-y-6 h-screen sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8  ">
          <div className="inline-block h-3/4 --full min-w-full overflow-scroll overflow-x-hidden	align-middle border-b border-gray-200 shadow sm:rounded-lg ">
            <table className="min-w-full ">
              <thead>
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
                {sortedList.map((project) => ( 
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

  return (
    <Render sortedList={sortedList}/>
  )
}

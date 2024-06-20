import { useEffect, useState } from "react"
import ProyectGridRow from "@/components/proyectGridRow"
import { ContinueButton } from "@/components/buttons"


function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-50 ">{title}</th>
}


export default function Proyectos() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setList(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!list) {
    return <div>Error al cargar los proyectos</div>; 
  }

  return (
    <>
      <div className="container max-w-7xl mt-8 space-y-6 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Proyectos</h1>
        </div>
          <div className="flex flex-col">
            <div className="space-y-6 h-screen sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8  ">
              <div className="inline-block max-h-3/4 --full min-w-full overflow-scroll overflow-x-hidden	align-middle border-b border-gray-200 shadow sm:rounded-lg ">
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
                    {list.map((proyecto) => (
                      <ProyectGridRow key={proyecto['projectCode']} proyecto={proyecto} />
                    ))}
                  </tbody>
                </table>                
              </div>
              <div>
                <ContinueButton text = "Nuevo proyecto" href="/proyectos/nuevoProyecto"/> 
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

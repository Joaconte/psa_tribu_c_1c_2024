import { useEffect, useState } from "react"
import ProyectGridRow from "@/components/proyectGridRow"
import Link from "next/link";
import { PROJECTS } from "./api/projects";

function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-50 ">{title}</th>
}

export default function Proyectos() {
  const [list, setList] = useState([])
  useEffect(() => {
    // En lugar de hacer un fetch, simplemente usa los datos importados
    setList(PROJECTS);
  }, []); // Se ejecuta una sola vez cuando el componente se monta

  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8 space-y-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Proyectos</h1>
        </div>
          <div className="flex flex-col">
            <div className="space-y-6 h-screen sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8  ">
              <div className="inline-block h-3/4 min-w-full overflow-scroll overflow-x-hidden	align-middle border-b border-gray-200 shadow sm:rounded-lg ">
                <table className="min-w-full">
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
                      <ProyectGridRow key={proyecto['code']} proyecto={proyecto} />
                    ))}
                  </tbody>
                </table>
                
              </div>
              <div>
              <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                href={`/nuevoProyecto`}> Nuevo proyecto </Link>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

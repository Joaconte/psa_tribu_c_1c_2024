import { useEffect, useState } from "react"
import TaskGridRow from "@/components/taskGridRow"
import Link from "next/link";
import { TASKS } from "./api/projects";

function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-50 ">{title}</th>
}

export default function Proyectos() {
  const [list, setList] = useState([])
  useEffect(() => {
    // En lugar de hacer un fetch, simplemente usa los datos importados
    setList(TASKS);
  }, []); // Se ejecuta una sola vez cuando el componente se monta

  function Column({ estado }: { estado: string }) {
    return <td> {list.filter((tarea)=> tarea['estado'] === estado)
    .map((tarea) => (
      <TaskGridRow key={tarea['code']} tarea={tarea} />
    ))}
    </td>
  }

  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8 space-y-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Tareas</h1>
        </div>
          <div className="flex">
            <div className="space-y-6 h-screen sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8  ">
              <div className="inline-block min-w-full overflow-scroll overflow-x-hidden	align-middle border-b border-gray-200 shadow sm:rounded-lg ">
                <table className="min-w-full ">
                  <thead>
                    <tr>
                      <HeaderItem title="NUEVAS" />
                      <HeaderItem title="EN PROGRESO" />
                      <HeaderItem title="CERADAS" />
                      <HeaderItem title="BLOQUEADAS" />
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                    <Column estado="nueva"/>
                    <Column estado="en progreso" />
                    <Column estado="cerrada" />
                    <Column estado="bloqueada" />
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
              <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                href={`/tarea/nuevaTarea`}> Nueva tarea </Link>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

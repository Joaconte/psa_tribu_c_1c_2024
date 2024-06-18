import { useEffect, useState } from "react"
import TaskGridRow from "@/components/taskGridRow"
import { ContinueButton } from "@/components/buttons"
import { TASKS } from "./api/projects";

function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-50 ">{title}</th>
}

export default function Proyectos() {
  const [list, setList] = useState([])
  useEffect(() => {
    // En lugar de hacer un fetch, simplemente usa los datos importados
   // setList(TASKS);
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
      <div className="container max-w-7xl mt-8 space-y-6">
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
                <ContinueButton text = "Nueva tarea" href="/tarea/nuevaTarea"/>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

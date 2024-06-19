import { useEffect, useState } from "react"
import TaskGridRow from "@/components/taskGridRow"
import { ContinueButton } from "@/components/buttons"
import Link from 'next/link'


function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-50 ">{title}</th>
}

export default function Tareas() {
  const [list, setList] = useState([])

  useEffect(() => {
    
    const getProjectCode = async () =>{
      return window.location.href.slice(-9, -7);
    }

    const fetchProjects = async () => {
      
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${getProjectCode()}/tasks`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
    console.log(getProjectCode())
  }, []);


  function Column({ estado }: { estado: string }) {
    return <td> {list.filter((tarea)=> tarea['status'] === estado)
    .map((tarea) => (
      <TaskGridRow key={tarea['name']} tarea={tarea} />
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
                    <Column estado="NEW"/>
                    <Column estado="IN_PROGRESS" />
                    <Column estado="CLOSED" />
                    <Column estado="BLOCK" />
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <ContinueButton text = "Nueva tarea" href="/proyectos/01/tareas/nuevaTarea"/>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

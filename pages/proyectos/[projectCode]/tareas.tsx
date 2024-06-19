import { useEffect, useState } from "react"
import TaskGridRow from "@/components/taskGridRow"
import { ContinueCodeProjectButton } from "@/components/buttons"
import { useRouter } from 'next/router'


function HeaderItem({ title }: { title: string }) {
  return <th className="px-12 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-50 ">{title}</th>
}

export default function Tareas() {

  const router = useRouter();
  const [list, setList] = useState([])
  var projectCode = router.query.projectCode;

  useEffect(() => {

    const fetchProjects = async () => {

      projectCode = router.query.projectCode;
      
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${projectCode}/tasks`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
      console.log(projectCode)
    };

    fetchProjects();
  }, []);


  function Column({ estado }: { estado: string }) {
    return <tr> {list.filter((tarea)=> tarea['status'] === estado)
    .map((tarea) => (
      <TaskGridRow key={tarea['name']} tarea={tarea} />
    ))}
    </tr>
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
                    <Column estado="NEW"/>
                    <Column estado="IN_PROGRESS" />
                    <Column estado="CLOSED" />
                    <Column estado="BLOCK" />
                  </tbody>
                </table>
              </div>
              <div>
                <ContinueCodeProjectButton text="Nueva tarea" projectCode={projectCode} path={"/tareas/nuevaTarea"} />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

import { useEffect, useState } from "react"
import TaskGridCell from "@/components/taskGridCell"
import { ContinueCodeProjectButton } from "@/components/buttons"
import { useRouter } from 'next/router'
import { TaskState } from "@/utils/enums"
import Link from "next/link";


function getEnumValueFromString(enumObj: any, str: string): number | undefined {
  return enumObj[str as keyof typeof enumObj];
}

function HeaderItem({ title }: { title: string }) {
  return <th className="px-12 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-50 ">{title}</th>
}

export default function Tareas() {

  const router = useRouter();
  const [list, setList] = useState([])
  var projectCode = router.query.projectCode;
  
  useEffect(() => {

    const fetchProject = async () => {
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${projectCode}/tasks`)
        .then(response => {
          if (!response.ok) {
            return response.json().then(errorInfo => Promise.reject(errorInfo));
          }
            return response.json();
          })
        .then(data => {
          console.log('Project created successfully:', data);
          setList(data);
        })
        .catch(error => {
          console.error('Error creating project:', error);
        });
    }
    fetchProject();
  }, []);


  function TasksPerColumn({ estado }: { estado: TaskState }){
    return <> 
    {list.filter((tarea)=> getEnumValueFromString( TaskState, tarea['status']) === estado)
    .map((tarea) => (
      <tr key={tarea['name']} >
        <TaskGridCell tarea={tarea} />
      </tr>
    ))}
    </>
  }

  function Column({ estado }: { estado: TaskState }) {
    return (

      <table className="min-w-ful">
        <thead >
            <HeaderItem title = {TaskState[estado]} />
        </thead>
        <tbody className="min-w-full border">
          <TasksPerColumn estado={estado}/>
        </tbody>
      </table>
      )
  }

  return (
    <>
      <div className="container max-w-7xl mt-8 space-y-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Tareas</h1>
        </div>
          <div className="flex">
            <div className="space-y-6 h-screen sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ">
              <div className="grid grid-cols-4 inline-block min-w-full overflow-scroll overflow-x-hidden border-b border-gray-200 shadow sm:rounded-lg  ">
          
                <Column estado={TaskState.NEW}/>
                <Column estado={TaskState.IN_PROGRESS}/>
                <Column estado={TaskState.CLOSED}/>
                <Column estado={TaskState.LOCKED}/>

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

/*

                <table className="min-w-full">
                  <thead>
                    <tr>
                      <HeaderItem title="NUEVAS" />
                      <HeaderItem title="EN PROGRESO" />
                      <HeaderItem title="CERADAS" />
                      <HeaderItem title="BLOQUEADAS" />
                    </tr>
                  </thead>
                  <tbody>
                    <Column estado={TaskState.NEW}/>
                    <Column estado={TaskState.IN_PROGRESS}/>
                    <Column estado={TaskState.CLOSED}/>
                    <Column estado={TaskState.LOCKED}/>
                  </tbody>
                </table>

*/
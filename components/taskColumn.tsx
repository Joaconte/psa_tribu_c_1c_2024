import { getEnumValueFromString, parseTaskStatusToESP } from "@/utils/enumFunctions";
import { TaskStatus } from "@/utils/enums";
import { Task } from "@/utils/types";
import Link from "next/link";

export default function TaskColumn({ estado, list, projectStatus  }: { estado: TaskStatus, list:Task[], projectStatus:any  }) {
  return (

    <table className="max-w-70 ">
      <thead className ="top-0 ">
        <HeaderItem title = {parseTaskStatusToESP(TaskStatus[estado]).toUpperCase()} />
      </thead>
      <tbody className="min-w-full border">
        <TasksPerColumn estado={estado} list={list} projectStatus={projectStatus}/>
      </tbody>
    </table>
    )
}

function HeaderItem({ title }: { title: string }) {
  return <tr>
          <th className="text-center h-10 px-12 py-3 text-sm text-left text-gray-800 border-b border-gray-200 bg-gray-50 ">{title}</th>
        </tr>
}

function TasksPerColumn({ estado, list, projectStatus }: { estado: TaskStatus, list:Task[], projectStatus:any }){
  return <> 
  {list.filter((tarea)=> getEnumValueFromString( TaskStatus, tarea['status']) == estado)
  .map((tarea) => (
    <tr key={tarea['taskCode']} className="flex items-center justify-center ">
      <TaskGridCell tarea={tarea} projectStatus = {projectStatus}/>
    </tr>
  ))}
  </>
}

function TaskGridCell({ tarea, projectStatus }: {tarea: Task, projectStatus: any}) {
  const projectCode = tarea['projectCode'];
  return (
    <td key={`${tarea.name}`} className="px-12 py-4 w-full h-full whitespace-no-wrap border border-gray-200">
      <Link className="flex items-center justify-center w-full h-full font-medium hover:underline "
        href={{ pathname: `/proyectos/${tarea.projectCode}/tareas/${tarea.taskCode}`,
        query : `projectStatus=${projectStatus}`,
        }} >{tarea.name}</Link>
    </td>
  )
}





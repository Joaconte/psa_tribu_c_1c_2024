import Link from "next/link";

export default function TaskGridCell({ tarea }: {tarea: any}) {
  return (
      <td key={`${tarea['name']}`} className="px-12 py-4 whitespace-no-wrap border-b border-gray-200">
        <Link className="flex items-cente font-medium  hover:underline "
        href={{
            pathname: `/proyectos/${tarea['projectCode']}/tareas/${tarea['taskCode']}`,
            query: {projectCode : tarea['projectCode']}
        }}>{tarea['name']}</Link> 
      </td>
  )
}



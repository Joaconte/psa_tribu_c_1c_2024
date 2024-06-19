import Link from "next/link";

export default function TaskGridRow({ tarea }: {tarea: any}) {
  return (
    <tr key={`${tarea['name']}`}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <Link className="flex items-cente font-medium  hover:underline"
        href={{
            pathname: `/proyectos/${tarea['projectCode']}/tareas/${tarea['taskCode']}`,
            query: `${tarea['projectCode']}`
        }}>{tarea['name']}</Link> 
      </td>
    </tr>
  )
}


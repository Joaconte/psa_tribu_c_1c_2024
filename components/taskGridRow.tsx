import Link from "next/link";

export default function TaskGridRow({ tarea }: {tarea: any}) {
  return (
    <tr key={`${tarea['codigo']}`}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        
        <Link className="flex items-center start-0" href={`/nuevaTarea`} >{tarea['titulo']}</Link>
      </td>
    </tr>
  )
}


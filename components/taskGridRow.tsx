export default function TaskGridRow({ tarea }: {tarea: any}) {
  return (
    <tr key={`${tarea['name']}`}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <a href={`/proyectos/01/tareas/${encodeURIComponent(tarea['name'])}`}  className="flex items-cente font-medium  hover:underline">{tarea['name']}</a>
      </td>
    </tr>
  )
}


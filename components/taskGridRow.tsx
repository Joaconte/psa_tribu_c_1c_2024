export default function TaskGridRow({ tarea }: {tarea: any}) {
  return (
    <tr key={`${tarea['codigo']}`}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <a href={`/tarea/${encodeURIComponent(tarea['codigo'])}`}  className="flex items-cente font-medium  hover:underline">{tarea['titulo']}</a>
      </td>
    </tr>
  )
}


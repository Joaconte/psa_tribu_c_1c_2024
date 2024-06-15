export default function ProyectGridRow({ proyecto }: {proyecto: any}) {
  return (
    <tr key={`${proyecto['codigo']}`}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{proyecto['codigo']}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{proyecto['titulo']}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{proyecto['lider']}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{proyecto['fechaInicio']}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{proyecto['fechaFin']}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{proyecto['estado']}</div>
      </td>
      
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <a href={`/tareas`} className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline">ver</a>
      </td>
    </tr>
  )
}

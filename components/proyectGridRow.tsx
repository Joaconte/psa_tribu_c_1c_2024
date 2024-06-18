function CommonItem({text}: {text: any}){
  return(
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div className="flex items-center">{text}</div>
    </td>
  )
}

export default function ProyectGridRow({ proyecto }: {proyecto: any}) {

  return (
    <tr key={`${proyecto['projectCode']}`}>

      <CommonItem text={proyecto['projectCode']}/>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <a href={`/proyecto/${encodeURIComponent(proyecto['projectCode'])}`} 
        className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline">{proyecto['name']}</a>
      </td>

      <CommonItem text={proyecto['leaderCode']}/>
      <CommonItem text={proyecto['startDate']}/>
      <CommonItem text={proyecto['endDate']}/>
      <CommonItem text={proyecto['status']}/>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <a href={`/tareas`} className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline">ver</a>
      </td>
    </tr>
  )
}

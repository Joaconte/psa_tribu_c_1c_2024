function CommonItem({text}: {text: any}){
  return(
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div className="flex items-center">{text}</div>
    </td>

  )
}


export default function ProyectGridRow({ proyecto }: {proyecto: any}) {

  return (
    <tr key={`${proyecto['codigo']}`}>

      <CommonItem text={proyecto['codigo']}/>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <a href={`/proyecto/${encodeURIComponent(proyecto['codigo'])}`} 
        className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline">{proyecto['titulo']}</a>
      </td>

      <CommonItem text={proyecto['lider']}/>
      <CommonItem text={proyecto['fechaInicio']}/>
      <CommonItem text={proyecto['fechaFin']}/>
      <CommonItem text={proyecto['estado']}/>


      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <a href={`/tareas`} className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline">ver</a>
      </td>
    </tr>
  )
}

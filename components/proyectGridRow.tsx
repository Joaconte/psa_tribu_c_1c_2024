import { parseProjectStatusToESP } from "@/utils/enumFunctions"
import Link from "next/link"

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
        <Link  className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href={{
            pathname: `/proyectos/${encodeURIComponent(proyecto['projectCode'])}`,
          }}
        >{proyecto['name']}
        </Link>
      </td>

      <CommonItem text={proyecto['leaderCode']}/>
      <CommonItem text={proyecto['startDate']}/>
      <CommonItem text={proyecto['endDate']}/>
      <CommonItem text={parseProjectStatusToESP(proyecto['status'])}/>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <Link className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline"
              href={{
                  pathname: `/proyectos/${encodeURIComponent(proyecto['projectCode'])}/tareas`,
                  query : `projectStatus=${proyecto['status']}`
              }}>ver</Link>
      </td>
    </tr>
  )
}

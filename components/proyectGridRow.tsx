import { parseProjectStatusToESP } from "@/utils/enumFunctions"
import { Resource } from "@/utils/types";
import Link from "next/link"

function CommonItem({text}: {text: any}){
  return(
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div className="flex items-center">{text}</div>
    </td>
  )
}

export default function ProyectGridRow({ project, resources }: {project: any, resources: Resource[]}) {


  const resource = resources.find(resource => resource["legajo"] === project["leaderCode"]);
  var projectLeader = ""
  if (resource)
    projectLeader = `${resource["Nombre"]} ${resource["Apellido"]}`

  return (
    <tr key={`${project['projectCode']}`}>

      <CommonItem text={project['projectCode']}/>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <Link  className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href={{
            pathname: `/proyectos/${encodeURIComponent(project['projectCode'])}`,
          }}
        >{project['name']}
        </Link>
      </td>

      <CommonItem text={projectLeader}/>
      <CommonItem text={project['startDate']}/>
      <CommonItem text={project['endDate']}/>
      <CommonItem text={parseProjectStatusToESP(project['status'])}/>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <Link className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline"
              href={{
                  pathname: `/proyectos/${encodeURIComponent(project['projectCode'])}/tareas`,
                  query : `projectStatus=${project['status']}`
              }}>ver</Link>
      </td>
    </tr>
  )
}

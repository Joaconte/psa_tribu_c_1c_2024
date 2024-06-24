import { getEnumValueFromString, parseProjectStatusToESP, projectStatusColor } from "@/utils/enumFunctions"
import { ProjectStatus } from "@/utils/enums";
import { Resource } from "@/utils/types";
import Link from "next/link"

function CommonItem({text}: {text: any}){
  return(
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center justify-center">
      <div className="flex justify-center">{text}</div>
    </td>
  )
}

function StatusItem({project}: {project: any}){

  const classname = "flex justify-center " + projectStatusColor(project.status)

  return(
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center justify-center">
      <div className={classname}>{parseProjectStatusToESP(project.status)}</div>
    </td>
  )
}

export default function ProyectGridRow({ project, resources }: {project: any, resources: Resource[]}) {

  const resource = resources.find(resource => resource.legajo === project.leaderCode);
  var projectLeader = ""
  if (resource)
    projectLeader = `${resource.Nombre} ${resource.Apellido}`

  return (
    <tr key={`${project.projectCode}`}>

      <CommonItem text={project.projectCode}/>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
        <Link className="flex items-cente font-medium text-blue-600 dark:text-blue-500 hover:underline text-center justify-center"
          href={`/proyectos/${encodeURIComponent(project.projectCode)}`}>{project.name}</Link>
      </td>

      <CommonItem text={projectLeader}/>
      <CommonItem text={project.startDate}/>
      <CommonItem text={project.endDate}/>
      <StatusItem project={project}/>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <Link className="flex justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline text-center justify-center"
              href={{ pathname: `/proyectos/${encodeURIComponent(project.projectCode)}/tareas`,
                  query : `projectStatus=${project.status}&projectName=${project.name}`
              }}>ver</Link>
      </td>
    </tr>
  )
}

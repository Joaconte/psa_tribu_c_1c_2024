import { getEnumValueFromString, parseProjectStatusToESP } from "@/utils/enumFunctions"
import { ProjectStatus } from "@/utils/enums";
import { Resource } from "@/utils/types";
import Link from "next/link"

function CommonItem({text}: {text: any}){
  return(
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div className="flex items-center">{text}</div>
    </td>
  )
}

function StatusItem({project}: {project: any}){

  var color
  if(getEnumValueFromString(ProjectStatus, project['status']) == ProjectStatus.INITIATED){ 
    color = "text-green-700";
  }else if(getEnumValueFromString(ProjectStatus, project['status']) == ProjectStatus.SUSPENDED) {
    color = "text-yellow-400";
  }
    else{
    color = "text-red-700";
  }

  const classname = "flex items-center " + color;

  return(
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div className={classname}>{parseProjectStatusToESP(project['status'])}</div>
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
      <StatusItem project={project}/>

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

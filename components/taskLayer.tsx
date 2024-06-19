import Link from "next/link"

function Label({text, value}: {text: string, value: string}){
    return(
        <div className="space-y-2">
          <label className="">{text} {value}</label>
        </div>
    )
  }

  function H1({value}: {value: string}){
    return(
        <h1 className="text-4xl mb-5 font-bold ">{value}</h1>
    )
  }
  
  export default function TaskLayer({ task }: {task: any}) {
  
    return (
        <div className="mt-8 flex h-fulls flex-col space-x-0 space-y-15 bg-white">
            <H1 value={task['name']}/>
            <div className="container max-w-7xl mx-auto mt-8 space-y-7">
                <Label text="Código:" value={task['taskCode']}/>
                <Label text="Estado:" value={task['status']}/>
                <Label text="Prioridad:" value={task['priority']}/>
                <Label text="employeeCode:" value={task['employeeCode']}/>
                <Label text="Descripción:" value={task['description']}/>
                <Label text="Fecha de inicio:" value={task['startDate']}/>
                <Label text="Fecha estimada de finalización:" value={task['endDate']}/>
                <div className="flex justify-center items-center bg-white space-x-10">      
                <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    href={{
                        pathname: `/proyectos/${encodeURIComponent(task['projectCode'])}/tareas/${encodeURIComponent(task['taskCode'])}`,
                        query: `${(task['taskCode'])}` // the data
                    }}>Actualizar datos</Link>  
                </div>
            </div>  
        </div>  
    )
  }
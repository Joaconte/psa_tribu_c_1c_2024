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
  
  export default function ProyectLayer({ project }: {project: any}) {
  
    return (
        <div className="mt-8 flex h-fulls flex-col space-x-0 space-y-15 bg-white">
            <H1 value={project['name']}/>
            <div className="container max-w-7xl mx-auto mt-8 space-y-7">
                <Label text="Código:" value={project['projectCode']}/>
                <Label text="Estado:" value={project['status']}/>
                <Label text="leaderCode:" value={project['leaderCode']}/>
                <Label text="productCode:" value={project['productCode']}/>
                <Label text="Descripción:" value={project['description']}/>
                <Label text="Fecha de inicio:" value={project['startDate']}/>
                <Label text="Fecha estimada de finalización:" value={project['endDate']}/>
                <div className="flex justify-center items-center bg-white space-x-10">      
                <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    href={{
                        pathname: `/proyectos/${encodeURIComponent(project['projectCode'])}/editarProyecto`,
                        query: `${(project['projectCode'])}` // the data
                    }}>Actualizar datos</Link>  
                </div>
            </div>  
        </div>  
    )
  }
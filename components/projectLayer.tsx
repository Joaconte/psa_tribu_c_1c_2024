import { ContinueCodeProjectButton } from "./buttons"

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
                <ContinueCodeProjectButton text="Actualizar datos" projectCode={project['projectCode']} path={"/editarProyecto"}/>
                </div>
            </div>  
        </div>  
    )
  }
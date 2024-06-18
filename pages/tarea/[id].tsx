import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export default function Proyecto() {

  return (

    <div className="mt-8 flex h-full flex-col space-x-0 space-y-15 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Tarea</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">
          
        <div className="space-y-2">
            <label className="">Código: </label>
        </div>
        <div className="space-y-2">
            <label className="">Desarrollador a cargo: </label>
        </div>
        <div className="space-y-2">
            <label className="">Estado: </label>
        </div>
        <div className="space-y-2">
          <label className="">Prioridad: </label>
        </div>
        <div className="space-y-2">
            <label className="">Descripción: </label>
        </div>
        <div className="space-y-2">
            <label className="">Fecha de inicio: </label>
        </div>
        <div className="space-y-2">
            <label className="">Fecha de finalizacion estimada: </label>
        </div>
        <div className="flex justify-center items-center bg-white space-x-10">        
          <a type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href={`/tarea/editarTarea`}>Actualizar datos</a>
        </div>
      </div>
    </div>
  )
}
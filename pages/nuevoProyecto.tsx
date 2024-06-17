import RecursoItemSelect from "@/components/recursoItemSelect"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import CancelButton from "@/components/CancelButton" 

import { useEffect, useState } from "react"

export default function NuevoProyecto() {

  const [list, setList] = useState([])

  useEffect(() => {
    fetch("https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setList(data)
        })
}, [])
  return (

    <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">Nuevo proyecto</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">
          
        <div className="space-y-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Título</label>
          <input type="text" id="message" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Ingrese el título"></input>
        </div>
        
        <div className="space-y-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Estado</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Iniciado</option>
            <option>Suspendido</option>
            <option>Terminado</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Descripción</label>
          <textarea rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Ingrese una descripción aquí..."></textarea>
        </div>

        <form className="max-w-sm">
          <label className="block mb-2 text-sm font-medium text-gray-900">Lider</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {list.map((recurso) => (
                      <RecursoItemSelect key={recurso['legajo']} recurso={recurso} />
                    ))}
          </select>
        </form>


        <div className="space-y-1">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Fecha estimada de finalización</label>
          <input type="date" />
        </div>
        
        <div className="flex justify-center items-center bg-white space-x-10">        
          <CancelButton/>     
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Crear nuevo proyecto</button>
        </div>
      </div>
    </div>
  )
}
import RecursoItemSelect from "@/components/recursoItemSelect"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import { CancelButton, ContinueButton } from "@/components/buttons"
import {InputText, OptionsList, Description, Date} from "@/components/editLayerComponents" 

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
          
        <InputText label="Título" placeholder="Ingrese el título"/>

        <OptionsList label = "Estado" options = {["Iniciado", "Suspendido", "Terminado"]}/>

        <Description/>

        <form className="max-w-sm">
          <label className="block mb-2 text-sm font-medium text-gray-900">Lider</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {list.map((recurso) => (
                      <RecursoItemSelect key={recurso['legajo']} recurso={recurso} />
                    ))}
          </select>
        </form>
        
        <Date/>
        
        <div className="flex justify-center items-center bg-white space-x-10">        
          <CancelButton/>     
          <ContinueButton text = "Crear nuevo proyecto" href="/proyectos"/>      
        </div>
      </div>
    </div>
  )
}
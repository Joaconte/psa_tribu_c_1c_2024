import Image from "next/image"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (

    <div className="mt-8 flex h-full flex-col space-x-0 space-y-4 bg-white">
      <h1 className="text-4xl mb-5 font-bold ">NuevoProyecto</h1>
      <div className="container max-w-7xl mx-auto mt-8 space-y-7">
          
        <div className="space-y-2">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Título</label>
          <textarea id="message" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Ingrese el título"></textarea>
        </div>

        <div className="space-y-2">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Descripción</label>
          <textarea id="message" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Ingrese una descripción aquí..."></textarea>
        </div>

        <form class="max-w-sm">
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Lider</label>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Placeholder</option>
            <option value="US">Placeholder</option>
            <option value="CA">Placeholder</option>
            <option value="FR">Placeholder</option>
            <option value="DE">Placeholder</option>
          </select>
        </form>

        <div className="space-y-1">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Fecha estimada de finalización</label>
          <input type="date" />
        </div>
        
        <div className="flex justify-center items-center bg-white space-x-10">
          <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 
          focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
          dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Crear nuevo proyecto</button>
        </div>
      </div>
    </div>
  )
}
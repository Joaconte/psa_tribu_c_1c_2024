import { useEffect, useState } from "react"
import UserGridRow from "@/components/userGridRow"

function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
}

export default function Usuarios() {
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
    <>

      {/* ACA EMPIEZA LA GRILLA */}

      <div className="container max-w-7xl mx-auto mt-8 space-y-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Proyectos</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <HeaderItem title="Código" />
                    <HeaderItem title="Proyecto" />
                    <HeaderItem title="Líder" />
                    <HeaderItem title="Fecha estimada de finalización" />
                    <HeaderItem title="Estado" />
                    <HeaderItem title="Tareas" />
                  </tr>
                </thead>
                <tbody>
                  {list.map((proyecto) => (
                    <UserGridRow key={proyecto['code']} proyecto={proyecto} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
        dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Nuevo proyecto</button>
      </div>
    </>
  )
}

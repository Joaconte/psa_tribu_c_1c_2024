import Image from "next/image"
import { Inter } from "next/font/google"
import { useState } from "react"
import { Usuario } from "./types"

const inter = Inter({ subsets: ["latin"] })

export default function Grilla() {
  const [list, setList]: [Array<Usuario>, (list: Array<Usuario>) => void] = useState([
    {
      nombre: "Joni",
      apellido: "M",
      horasTrabajadas: 400,
    },
    {
      nombre: "Sergio",
      apellido: "V",
      horasTrabajadas: 800,
    },
    {
      nombre: "Tomás",
      apellido: "B",
      horasTrabajadas: 500,
    },
    {
      nombre: "Guido",
      apellido: "DB",
      horasTrabajadas: 750,
    },
  ] as Array<Usuario>)

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {/* ESTE EL MODAL */}
      <div
        id="loguearHorasModal"
        tabIndex={-1}
        aria-hidden={!modalOpen}
        className={`${
          modalOpen ? "" : "hidden"
        } absolute inset-0 h-screen flex justify-center items-center bg-black/25`}
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add Product</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => {
                  setModalOpen(false)
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Usuario
                  </label>
                  <select
                    id="usuario"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Seleccione usuario</option>
                    {list.map((usuario) => (
                      <option value={`${usuario.nombre}-${usuario.apellido}`}>
                        {usuario.nombre} {usuario.apellido}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="horas" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Horas
                  </label>
                  <input
                    type="number"
                    name="horas"
                    id="horas"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Horas trabajadas"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600 place-self-end"
                data-modal-toggle="loguearHorasModal"
                id="loguearHorasButton"
                onClick={() => {
                  setModalOpen(false)
                }}
              >
                Loguear horas
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ACA EMPIEZA LA GRILLA */}

      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Grilla</h1>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600"
              data-modal-toggle="loguearHorasModal"
              id="loguearHorasButton"
              onClick={() => {
                setModalOpen(true)
              }}
            >
              Loguear horas
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      ID
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Nombre
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Apellido
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Horas trabajadas
                    </th>
                    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {list.map((usuario, index) => (
                    <tr key={`${usuario.nombre}-${usuario.apellido}`}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">{index + 1}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">{usuario.nombre}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">{usuario.apellido}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p>{usuario.horasTrabajadas}</p>
                      </td>

                      <td className="px-6 py-3 text-left font-medium leading-5 whitespace-no-wrap border-b border-gray-200 place-items-center">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-red-600 hover:text-red-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import Image from "next/image"
import { Inter } from "next/font/google"
import { useEffect, useState } from "react"
import { Usuario } from "./types"
import Modal from "@/components/modal"
import UserGridRow from "@/components/userGridRow"

const inter = Inter({ subsets: ["latin"] })

function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
}

export default function Grilla() {
  const [list, setList]: [Array<Usuario>, (list: Array<Usuario>) => void] = useState([] as Array<Usuario>)

  useEffect(() => {
    fetch("http://localhost:5001/usuarios")
      .then((res) => {
        console.log("res", res)
        return res.json()
      })
      .then((data) => {
        console.log("data", data)
        setList(data)
      })
  }, [])

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {/* ESTE EL MODAL */}
      <Modal list={list} modalOpen={modalOpen} setModalOpen={setModalOpen}></Modal>

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
                    <HeaderItem title="ID" />
                    <HeaderItem title="Nombre" />
                    <HeaderItem title="Apellido" />
                    <HeaderItem title="Horas trabajadas" />
                    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
                      Edit
                    </th>
                    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {list.map((usuario, index) => (
                    <UserGridRow usuario={usuario} index={index} />
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

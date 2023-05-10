import { Usuario } from "@/pages/contact/types"

export default function UserGridRow({ usuario, index }: { usuario: Usuario; index: number }) {
  function handleClick() {
    console.log("Hello ", usuario)

    fetch(`http://localhost:5001/usuario/${usuario.nombre}-${usuario.nombre}`, { method: "DELETE" })
      .then(() => console.log("Usuario borrado exitosamente"))
      .catch(() => console.log("No pude borrar al usuario"))
  }

  return (
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
            className="w-6 h-6 text-red-600 hover:text-red-800"
            width="800px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 306.637 306.637"
          >
            <g>
              <g>
                <path
                  d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"
                />
                <path
                  d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
L265.13,75.602L231.035,41.507z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </g>
          </svg>
        </button>
      </td>

      <td className="px-6 py-3 text-left font-medium leading-5 whitespace-no-wrap border-b border-gray-200 place-items-center">
        <button onClick={handleClick}>
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
  )
}

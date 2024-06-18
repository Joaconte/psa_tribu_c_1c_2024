
function InputText({ label, placeholder }: {label: string, placeholder: string}) {
    return (
        <div className="space-y-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Título</label>
          <input type="text" id="message" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder}></input>
        </div>
    )
}

function OptionsList({ label, options }: {label: string, options: string[]}) {
    return (
        <div className="space-y-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
        </select>
      </div>
    )
}

function Description() {
    return (
        <div className="space-y-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Descripción</label>
          <textarea rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
          border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Ingrese una descripción aquí..."></textarea>
        </div>
    )
}

function Date() {
    return (
        <div className="space-y-1">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Fecha estimada de finalización</label>
          <input type="date" />
        </div>
    )
}

export {InputText, OptionsList, Description, Date }

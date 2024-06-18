function CancelButton() {
    return (
        <a className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 
        focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-gray-100 hover:text-blue-700
        focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
        dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        href="javascript:history.back()"> Cancelar </a>
    )
}

function ContinueButton({ text, href }: {text: string, href: string} ) {
    return (
        <a type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
        dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        href = {href}>{text}</a>
    )
}

export {CancelButton, ContinueButton}
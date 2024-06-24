import { fetchDeleteItem } from "@/utils/fetchFunction"
import { useNavigate } from "react-router-dom"

function ContinueButton({ text, href }: {text: string, href: string} ) {
    return (
        <a type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
        dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        href = {href}>{text}</a>
    )
}

const BackButton = ({text}: {text: string}): JSX.Element => {

    const navigate = useNavigate();

    return(
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 
        focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-gray-100 hover:text-blue-700
        focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
        dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => navigate(-1)}>{text}</button>
    )
  }

const DeleteButton = ({text, item, url, art}: {text: string, item: string, url: string, art: string}): JSX.Element => {
    const navigate = useNavigate();
        
    function ConfirmAlert(){
        if (window.confirm("Está seguro que desea eliminar "+art+" "+item)){
            fetchDeleteItem(url, item)
            setTimeout(() => {
                navigate(-1)
            }, 300);
        }
    }

    return(
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 
        focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600
        dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => ConfirmAlert()}>{text}</button>
        
    )
  }

  function ApplyButton({text, onClick}: {text: string, onClick: any}) {
    return (
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
            dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={onClick}>{text}</button>
    )
}

export {ContinueButton, BackButton, DeleteButton, ApplyButton}

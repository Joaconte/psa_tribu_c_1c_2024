import React, { useState } from 'react';

function InputText({ label, placeholder }: {label: string, placeholder: string}) {
    return (
        <div className="space-y-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Título</label>
          <input type="text" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
          border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={placeholder}></input>
        </div>
    )
}

function PreChargedInputText({ label, input }: {label: string, input: string}) {
    const [text, setText] = useState(input);
    return (
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Título</label> 
        <input type="text" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
        border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
    );
  }

  function TextArea({ label, placeholder }: {label: string, placeholder: string}) {
    return (
      <div className="space-y-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
        <textarea rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
        border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder={placeholder}></textarea>
      </div>
  )
}


function PreChargedTextArea({ label, input }: {label: string, input: string}) {
  const [text, setText] = useState(input);
  return (
    <div className="space-y-2">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
      <textarea rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
      border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      value={text} onChange={(e) => setText(e.target.value)}></textarea>
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


function InputDate() {
    
    const today = new Date();
    const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
    const currentDate = yesterday.toISOString().split('T')[0];

    return (
        <div className="space-y-1">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Fecha estimada de finalización</label>
          <input type="date" min={currentDate}/>
        </div>
    )

}

export {InputText, PreChargedInputText, OptionsList, TextArea, PreChargedTextArea, InputDate }

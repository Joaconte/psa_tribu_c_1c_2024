import { Resource } from '@/utils/types';
import React, { ChangeEventHandler } from 'react';

function InputText({ name, label, value, placeholder, onChange }: 
  {name: string, label: string, value: string, placeholder:string, onChange: ChangeEventHandler<any>}) {
    return (
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label> 
        <input name ={name} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
        border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder={placeholder} value={value} onChange={onChange}></input>
      </div>
    );
  }

  function TextArea({ name, label, value, placeholder, onChange }: 
    {name: string, label: string, value: string, placeholder: string, onChange: ChangeEventHandler<any>}) {
    return (
      <div className="space-y-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
        <textarea name ={name} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
        border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        value={value ?? ''} placeholder={placeholder} onChange={onChange}></textarea>
      </div>
  )
}

interface EnumType {
  [key: number]: string ;
}

function OptionsList({ name, label, value, onChange, options, optionsESP }: 
  {name: string, label: string, value: string, onChange: ChangeEventHandler<any>, options: EnumType, optionsESP: EnumType}) {

    const stateOptions = Object.values(options);
    return (
        <div className="space-y-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
        <select name = {name} value={value ?? ''} onChange={onChange} className="bg-gray-50 border border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> 
            {stateOptions
            .filter((key) => isNaN(Number(key)))
            .map((option, index) => (<option key={index} value={option}>{optionsESP[index]}</option>))}
        </select>
      </div>
    )
}

function PredeterminatedOption( {value} : {value:string}){
  if (!value)
    return <option value="">-- Seleccionar --</option>
  return (null)
}


function ResourceOptionsList({ name, label, value, onChange, resources }: 
  {name: string, label: string, value: string, onChange: ChangeEventHandler<any>, resources: Resource[],}) {
    return (
        <div className="space-y-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label> 
        <select name = {name} value={value ?? ''} onChange={onChange} className="bg-gray-50 border border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">  
        <PredeterminatedOption value= {value}/>
            {resources.map((resource, index) => ( 
            <option key={index} value={resource.legajo}>{resource.Nombre} {resource.Apellido}</option>))}
        </select>
      </div>
    )
}

function InputDate({name, label, value, onChange}: 
  {name: string, label: string, value: string, onChange: ChangeEventHandler<any>}) {
    return (
        <div className="space-y-1">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
          <input name={name} value={value ?? ''} onChange={onChange} type="date"/>
        </div>
    )
}

export {InputText,  OptionsList, TextArea, InputDate, ResourceOptionsList }

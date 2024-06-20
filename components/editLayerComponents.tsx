import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { ProjectState, ProjectStateESParse } from './enums';

function InputText({ id, label, placeholder }: {id: string, label: string, placeholder: string}) {
    return (
        <div className="space-y-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
          <input id ={id} type="text" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
          border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={placeholder}></input>
        </div>
    )
}

function PreChargedInputText({ name, label, value, onChange }: 
  {name: string, label: string, value: string, onChange: ChangeEventHandler<any>}) {
    return (
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label> 
        <input name ={name} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
        border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          value={value} onChange={onChange}></input>
      </div>
    );
  }

  function TextArea({ id, label, placeholder }: {id: string, label: string, placeholder: string}) {
    return (
      <div className="space-y-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
        <textarea id ={id} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
        border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder={placeholder}></textarea>
      </div>
  )
}


function PreChargedTextArea({ name, label, value, onChange }: 
  {name: string, label: string, value: string, onChange: ChangeEventHandler<any>}) {
  return (
    <div className="space-y-2">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
      <textarea name ={name} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
      border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      value={value} onChange={onChange}></textarea>
    </div>
  )
}


function OptionsList({ name, label, options, value, onChange }: 
  {name: string, label: string, options: string[], value: string, onChange: ChangeEventHandler<any>}) {
    return (
        <div className="space-y-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
        <select name ={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
        </select>
      </div>
    )
}

function PreChargedOptionsList({ name, label, onChange }: 
  {name: string, label: string, options: string[], value: string, onChange: ChangeEventHandler<any>}) {

    const projectStateOptions = Object.values(ProjectState);
    return (
        <div className="space-y-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
        <select name = {name} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {projectStateOptions
            .filter((key) => isNaN(Number(key)))
            .map((option, index) => (<option value={option}>{ProjectStateESParse[index]}</option>))}
        </select>
      </div>
    )
}


function InputDate({name, label, value, onChange}: {name: string, label: string, value: string, onChange: ChangeEventHandler<any>}) {
    
    const today = new Date();
    const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
    const currentDate = yesterday.toISOString().split('T')[0];

    return (
        <div className="space-y-1">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
          <input name={name} value= {value} onChange={onChange} type="date" min={currentDate}/>
        </div>
    )
}

export {InputText, PreChargedInputText, PreChargedOptionsList, OptionsList, TextArea, PreChargedTextArea, InputDate }

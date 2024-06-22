import React, { useState } from "react";

import {OptionsList, InputText, TextArea, InputDate} from "@/components/editLayerComponents" 
import { ApplyButton, BackButton} from "@/components/buttons"
import { useNavigate } from "react-router-dom";
import { Priority, PriorityESP, TaskState, TaskStateESP } from "../../utils/enums";
import { Task } from "../../utils/types";


function getEnumValueFromString(enumObj: any, str: string): number | undefined {
    return enumObj[str as keyof typeof enumObj];
  }

  export const TaskFormEdition = ({ task }: {task: Task}): JSX.Element => {

    const navigate = useNavigate();

    function send(){

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${task.projectCode}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...updatedTask,
            employeeCode: parseInt(updatedTask.employeeCode),
            status: getEnumValueFromString(TaskState, updatedTask.status),
            priority: getEnumValueFromString(Priority, updatedTask.priority),
        })
        }).then(response => {
        if (!response.ok) {
            return response.json().then(errorInfo => Promise.reject(errorInfo));
            }
        return response.json();
        })
        .then(data => {
            console.log('Project updated successfully:', data);
            navigate(-1)
        })
        .catch(error => {
            console.error('Error creating project:', error);
        });        
    }

    const [ updatedTask, setTaskInfo] = useState<Task>(task);

    function handleSubmit() {

        if (!updatedTask.name)
            alert("El proyecto tiene que tener un título");
        else if (updatedTask.startDate && updatedTask.endDate && new Date(updatedTask.startDate) > new Date(updatedTask.endDate))
            alert("La fecha de finalizacion debe ser posterior a la fecha de inicio");
        else{
            send();
        }
    }

    return (

        <div className="container max-w-7xl mx-auto mt-8 space-y-7">                  
            <InputText name = "name" label = "Título" value={updatedTask.name}  placeholder = "" onChange = {(e) =>
                    setTaskInfo((prev) => ({ ...prev, name: e.target.value }))}/>

            <OptionsList name = "status" label = "Estado" value={updatedTask.status} 
            options = {TaskState}  optionsESP = {TaskStateESP}
            onChange = {(e) => setTaskInfo((prev) => ({ ...prev, status: e.target.value }))}/>

            <OptionsList name = "priority" label = "Prioridad" value={updatedTask.priority} 
            options = {Priority}  optionsESP = {PriorityESP}
            onChange = {(e) => setTaskInfo((prev) => ({ ...prev, priority: e.target.value }))}/>

            <TextArea name = "description" label = "Descripción" value = {updatedTask.description} placeholder = ""  onChange = {(e) =>
                    setTaskInfo((prev) => ({ ...prev, description: e.target.value }))}/>
                    
            <OptionsList name = "employeeCode" label = "Desarrollador designado" value={updatedTask.employeeCode} 
            options = {Priority}  optionsESP = {PriorityESP}
            onChange = {(e) => setTaskInfo((prev) => ({ ...prev, employeeCode: e.target.value }))}/>

            <div className = "flex bg-white space-x-14" >
                <InputDate name = "startDate" label = "Fecha de inicio" value={updatedTask.startDate} onChange = {(e) =>
                    setTaskInfo((prev) => ({ ...prev, startDate: e.target.value }))}/>

                <InputDate name = "endDate" label = "Fecha estimada de finalizacion" value={updatedTask.endDate} onChange = {(e) =>
                    setTaskInfo((prev) => ({ ...prev, endDate: e.target.value }))}/>
            </div>
            <div className="flex justify-center items-center bg-white space-x-10">  

                <BackButton text={"Cancelar"}/>
                <ApplyButton text={"Aplicar cambios"} onClick={handleSubmit}/>
            </div>     
        </div>

  );

}
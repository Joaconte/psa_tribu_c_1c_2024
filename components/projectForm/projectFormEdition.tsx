import { Project } from "@/types/types";
import React, { useState } from "react";

import {OptionsList, InputText, TextArea, InputDate} from "@/components/editLayerComponents" 
import { ApplyButton, BackButton} from "@/components/buttons"
import { useNavigate } from "react-router-dom";
import { ProjectState } from "../enums";


function getEnumValueFromString(enumObj: any, str: string): number | undefined {
    return enumObj[str as keyof typeof enumObj];
  }

  export const ProjectFormEdition = ({ project }: {project: Project}): JSX.Element => {

    const navigate = useNavigate();

    function send(){

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${project.projectCode}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...updatedProject,
            leaderCode: parseInt(updatedProject.leaderCode),
            status: getEnumValueFromString(ProjectState, updatedProject.status),
        })
        }).then(response => {
        if (!response.ok) {
            return response.json().then(errorInfo => Promise.reject(errorInfo));
            }
        return response.json();
        })
        .then(data => {
            console.log('Project updated successfully:', data);
        })
        .catch(error => {
            console.error('Error creating project:', error);
        });        
    }

    const [ updatedProject, setProjectInfo] = useState<Project>(project);

    function handleSubmit() {

        if (!project.name)
            alert("El proyecto tiene que tener un título");
        else if (updatedProject.startDate && updatedProject.endDate && new Date(updatedProject.startDate) > new Date(updatedProject.endDate))
            alert("La fecha de finalizacion debe ser posterior a la fecha de inicio");
        else{
            send();
            navigate(-1)
        }
    }

    return (

        <div className="container max-w-7xl mx-auto mt-8 space-y-7">                  
            <InputText name = "name" label = "Título" value={updatedProject.name}  placeholder = "" onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, name: e.target.value }))}/>

            <OptionsList name = "status" label = "Estado" value={updatedProject.status} onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, status: e.target.value }))}/>

            <TextArea name = "description" label = "Descripción" value = {updatedProject.description} placeholder = ""  onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, description: e.target.value }))}/>
                    
            <OptionsList name = "leaderCode" label = "Lider" value={updatedProject.leaderCode} onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, leaderCode: e.target.value }))}/>

            <div className = "flex bg-white space-x-14" >
                <InputDate name = "startDate" label = "Fecha de inicio" value={updatedProject.startDate} onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, startDate: e.target.value }))}/>

                <InputDate name = "endDate" label = "Fecha estimada de finalizacion" value={updatedProject.endDate} onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, endDate: e.target.value }))}/>
            </div>
            <div className="flex justify-center items-center bg-white space-x-10">  

                <BackButton text={"Cancelar"}/>
                <ApplyButton text={"Aplicar cambios"} onClick={handleSubmit}/>
            </div>     
        </div>

  );

}

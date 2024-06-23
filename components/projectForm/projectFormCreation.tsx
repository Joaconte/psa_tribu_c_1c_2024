import React, { useState } from "react";

import { InputDate, InputText, OptionsList, TextArea } from "@/components/editLayerComponents" 
import { ApplyButton, BackButton} from "@/components/buttons"
import { useNavigate } from "react-router-dom";
import { ProjectStatus, ProjectStatusESP } from "../../utils/enums";
import { Project } from "@/utils/types";
import { getEnumValueFromString } from "@/utils/enumFunctions";

  export const ProjectFormCreation = ({ project }: {project: Project}): JSX.Element => {

    const navigate = useNavigate();
    const [updatedProject, setProjectInfo] = useState<Project>(project);

    function sendProject(){

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...updatedProject,
            leaderCode: parseInt(updatedProject.leaderCode),
            status: getEnumValueFromString(ProjectStatus, updatedProject.status),
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

    function handleSubmit() {

        if (!updatedProject.name)
            alert("El proyecto tiene que tener un título");
        else if (updatedProject.startDate && updatedProject.endDate && new Date(updatedProject.startDate) > new Date(updatedProject.endDate))
            alert("La fecha de finalizacion debe ser posterior a la fecha de inicio");
        else{
            sendProject();
        }
    }

    return (

        <div className="container max-w-7xl mx-auto mt-8 space-y-7">                  
            <InputText name = "name" label="Título" value ={updatedProject.name} placeholder = "Título" onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, name: e.target.value }))}/>

            <OptionsList name="status" label={"Estado"} value={updatedProject.status}  
            options = {ProjectStatus}  optionsESP = {ProjectStatusESP}
            onChange={(e) => setProjectInfo((prev) => ({ ...prev, status: e.target.value }))}  />

            <TextArea name = "description" label="Descripción" value={updatedProject.description} placeholder = "Descripción"  onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, description: e.target.value }))}/>
                    
            <OptionsList name="leaderCode" label="Lider" value={updatedProject.leaderCode}  
            options = {ProjectStatus}  optionsESP = {ProjectStatusESP}
            onChange={(e) => setProjectInfo((prev) => ({ ...prev, leaderCode: e.target.value }))} />

            <div className = "flex bg-white space-x-14" >
                <InputDate name = "startDate" label = "Fecha de inicio" value={updatedProject.startDate} onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, startDate: e.target.value }))}/>

                <InputDate name = "endDate" label = "Fecha estimada de finalizacion" value={updatedProject.endDate}  onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, endDate: e.target.value }))}/>
            </div>
            <div className="flex justify-center items-center bg-white space-x-10">  

                <BackButton text={"Cancelar"}/>
                <ApplyButton text= {"Crear nuevo proyecto"} onClick={handleSubmit}/>
            </div>     
        </div>

  );

}
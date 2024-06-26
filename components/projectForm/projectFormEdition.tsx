import React, { useState } from "react";

import {OptionsList, InputText, TextArea, InputDate, ResourceOptionsList} from "@/components/editLayerComponents" 
import { ApplyButton, BackButton} from "@/components/buttons"
import { useNavigate } from "react-router-dom";
import { ProjectStatus, ProjectStatusESP } from "../../utils/enums";
import { Project, Resource } from "@/utils/types";
import { getEnumValueFromString } from "@/utils/enumFunctions";


  export const ProjectFormEdition = ({ project, resources }: {project: Project, resources:Resource[]}): JSX.Element => {

    const navigate = useNavigate();
    const [ updatedProject, setProjectInfo] = useState<Project>(project);

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
            status: getEnumValueFromString(ProjectStatus, updatedProject.status),
        })
        }).then(response => {
        if (!response.ok) {
            return response.json().then(errorInfo => Promise.reject(errorInfo));
            }
        return response.json();
        })
        .then(() => {
            window.alert("Projecto actualizado correctamente")
            navigate(-1)
        })
        .catch(() => {
            window.alert("Se produjo un error actualizando el proyecto")
        });        
    }

    function handleSubmit() {

        if (!project.name)
            alert("El proyecto tiene que tener un título");
        else if (updatedProject.startDate && updatedProject.endDate && new Date(updatedProject.startDate) > new Date(updatedProject.endDate))
            alert("La fecha de finalizacion debe ser posterior a la fecha de inicio");
        else{
            send();
        }
    }

    return (
        <div className="container max-w-7xl mx-auto mt-8 space-y-7">                  
            <InputText name = "name" label = "Título" value={updatedProject.name}  placeholder = "" onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, name: e.target.value }))}/>

            <OptionsList name = "status" label = "Estado" value={updatedProject.status} 
            options = {ProjectStatus}  optionsESP = {ProjectStatusESP}
            onChange = {(e) => setProjectInfo((prev) => ({ ...prev, status: e.target.value }))}/>

            <TextArea name = "description" label = "Descripción" value = {updatedProject.description} placeholder = ""  onChange = {(e) =>
                    setProjectInfo((prev) => ({ ...prev, description: e.target.value }))}/>

            <ResourceOptionsList name = "leaderCode" label = "Lider" value={updatedProject.leaderCode} 
            resources = {resources}
            onChange = {(e) => setProjectInfo((prev) => ({ ...prev, leaderCode: e.target.value }))}/>

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

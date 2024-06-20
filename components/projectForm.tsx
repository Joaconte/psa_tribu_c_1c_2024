import { Project } from "@/types/types";
import React, { useState } from "react";
import { ProjectState } from "./enums";

import {PreChargedOptionsList, PreChargedInputText, PreChargedTextArea, InputDate} from "@/components/editLayerComponents" 
import { CancelButton, ContinueButton } from "@/components/buttons"

interface ProjectFormProps {
        project: Project;
    }
  
interface ProjectFormState {
    project: Project;
  }

function getEnumValueFromString(enumObj: any, str: string): number | undefined {
    return enumObj[str as keyof typeof enumObj];
  }
  

export class ProjectForm extends React.Component<ProjectFormProps, ProjectFormState> {    
    constructor(props: any) {
      super(props);
      this.state =  {
        project: props.project, 
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  

    modProyect(project: Project){

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${project.projectCode}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            projectCode: project.projectCode,
            leaderCode: parseInt(project.leaderCode),
            productCode: project.productCode,
            name: project.name,
            startDate: project.startDate,
            endDate: project.endDate,
            description: project.description,
            status: getEnumValueFromString(ProjectState, project.status),
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


    handleChange(event: React.ChangeEvent<any>) {
        const { name, value } = event.target;
        console.log("CAMBIO TO " + value  )
        this.setState({
        project: {
            ...this.state.project,
            [name]: value,
        },
        });
    }
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(this.state.project)

        if (!this.state.project.name)
            alert("El proyecto tiene que tener un título");

        if (this.state.project.startDate && this.state.project.endDate && new Date(this.state.project.startDate) > new Date(this.state.project.endDate))
            alert("La fecha de finalizacion debe ser posterior a la fecha de inicio");
        else
            this.modProyect(this.state.project);
    }
  
  render() {
    const { project } = this.state;
      return (
        <div className="mt-8 flex h-fulls flex-col space-x-0 space-y-15 bg-white">
            <form onSubmit={this.handleSubmit}>
                <div className="container max-w-7xl mx-auto mt-8 space-y-7">                  
                <PreChargedInputText name = "name" label = "Título" value={project.name} onChange = {this.handleChange}/>

                <PreChargedOptionsList name = "status" label = "Estado" value={project.status}  options = {["Iniciado", "Suspendido", "Terminado"]} onChange = {this.handleChange}/>

                <PreChargedTextArea name = "description" label = "Descripción" value = {project["description"]} onChange = {this.handleChange}/>

                <PreChargedOptionsList name = "leaderCode" label = "Lider" value={project.leaderCode}  options = {[]} onChange = {this.handleChange}/>

                <div className = "flex bg-white space-x-14" >

                    <InputDate name = "startDate" label = "Fecha de inicio" value={project.leaderCode} onChange = {this.handleChange}/>

                    <InputDate name = "endDate" label = "Fecha estimada de finalizacion" value={project.leaderCode} onChange = {this.handleChange}/>

                </div>
                
                <div className="flex justify-center items-center bg-white space-x-10">   
                    <CancelButton/>     
                    
                    <input className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
                    type="submit" value="Aplicar cambios"/>     
                </div>     
                </div>
            </form>
        </div>  
      );
    }
  }
  
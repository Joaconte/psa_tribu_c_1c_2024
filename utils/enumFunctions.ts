import { ProjectStatus, ProjectStatusESP, TaskPriority, TaskPriorityESP, TaskStatus, TaskStatusESP } from "./enums";

export function getEnumValueFromString(enumObj: any, str: any): number {
    return enumObj[str as keyof typeof enumObj];
  }

export function parseToEsp(str: string, enumObj: any, enumObjESP: any): string {
    const enumValue = getEnumValueFromString(enumObj, str);
    return enumObjESP[enumValue];
}

export function parseProjectStatusToESP(status: string){
    return parseToEsp(status, ProjectStatus, ProjectStatusESP)
}

export function parseTaskPriorityToESP(priority: string){
    return parseToEsp(priority, TaskPriority, TaskPriorityESP)
}

export function parseTaskStatusToESP(status: string){
    return parseToEsp(status, TaskStatus, TaskStatusESP)
}

export function projectStatusColor(status: string){
    var color
    if(getEnumValueFromString(ProjectStatus, status) == ProjectStatus.INITIATED){ 
        return "text-green-700";
    }else if(getEnumValueFromString(ProjectStatus, status) == ProjectStatus.SUSPENDED) {
        return "text-yellow-400";
    }
    return "text-red-700";
    
}
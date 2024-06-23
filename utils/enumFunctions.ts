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
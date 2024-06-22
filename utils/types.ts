export interface Recurso {
  legajo: string;
  nombre: string;
  apellido: string;
}

export interface Project {
  projectCode: string;
  leaderCode: string;
  productCode: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  status: string;
}

export interface Task {
  taskCode: string;
  projectCode: string;
  name: string;
  status: string;
  description: string;
  employeeCode: string;
  startDate: string;
  endDate: string;
  priority: string;
}

export interface ISidebarItem {
  href: string
  title: string
  children?: ISidebarItem[]
}
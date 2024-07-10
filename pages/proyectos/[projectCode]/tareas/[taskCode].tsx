import TaskLayer from "@/components/taskLayer";
import { Task } from "@/utils/types";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem, fetchResource } from "@/utils/fetchFunction";
export default function Task() {

  const router = useRouter();
  const [task, setTask] = useState<Task>();
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true);

  var taskCode = router.query.taskCode;
  const projectStatus = router.query.projectStatus;

  const loadResource = async () => {

    if (resources && task){
      const resource = resources.find(resource => resource["legajo"] === task?.employeeCode);
      var employee = ""
      if (resource)
        employee = `${resource["Nombre"]} ${resource["Apellido"]}`
      setTask((prev: any) => ({ ...prev, employee: employee }))
      setLoading(false);
    }
  };

    useEffect(() => {
      const url= `/tasks/${taskCode}`
      fetchItem(url, "task",setTask, loadResource)
    }, [taskCode, resources]);

  if (loading || (!task?.employee && task?.employeeCode)) {
    fetchResource(setResources, null)
    return <LoadingScreen/>

  }else if (!task) {
    return <div>Error al cargar la tarea</div>;
    
  }else return (
      <TaskLayer task = {task} projectStatus={projectStatus}/>
  )
}
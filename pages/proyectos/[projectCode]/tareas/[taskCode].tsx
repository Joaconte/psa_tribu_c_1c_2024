import TaskLayer from "@/components/taskLayer";
import { Task } from "@/utils/types";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loadingScreen"
import { fetchItem, fetchResource } from "@/utils/fetchFunction";

export default function Task() {

    const router = useRouter();
    const [task, setTask] = useState<any>();
    const [resources, setResources] = useState([])
    const [loading, setLoading] = useState(true);

    var taskCode = router.query.taskCode;
    const projectStatus = router.query.projectStatus;

  useEffect(() => {
    
    fetchResource(setResources, setLoading)

    const url= `/tasks/${taskCode}`
    fetchItem(url, "task",setTask, setLoading)
  }, [taskCode]);
  
  if (loading) {
    return <LoadingScreen/>
  }

  return (
      <TaskLayer task = {task} resources = {resources} projectStatus={projectStatus}/>
  )
}
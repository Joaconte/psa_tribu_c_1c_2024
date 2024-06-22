import TaskLayer from "@/components/taskLayer";
import { Task } from "@/utils/types";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Task() {

    const router = useRouter();
    const [loading, setLoading] = useState(true);
  
    const [task, setTask] = useState<Task | null>(null); 


  useEffect(() => {
   
    const fetchTask = async () => {

      try {
        var taskCode = router.query.taskCode;
        if (!taskCode) {
          throw new Error("Task code is undefined or null");
      }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskCode}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTask(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
    fetchTask();
  }, [router.query.taskCode]);

  
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
      <TaskLayer task = {task}/>
  )
}
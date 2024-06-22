import TaskLayer from "@/components/taskLayer";
import { Task } from "@/utils/types";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Task() {

    const router = useRouter();
    const [loading, setLoading] = useState(true);
  
    const [task, setTask] = useState<Task>({
      taskCode: "null",
      projectCode: "null",
      name: "null",
      status: "null",
      description: "null",
      employeeCode: "null",
      startDate: "null",
      endDate: "null",
      priority: "null",
    });

  var taskCode = router.query.taskCode;

  useEffect(() => {
    const fetchTask = async () => {
      taskCode = router.query.taskCode;
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskCode}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTask(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchTask();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }


  return (
      <TaskLayer task = {task}/>
  )
}
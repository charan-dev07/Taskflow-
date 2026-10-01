import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

export function Analytics(){

  const [tasks, setTasks] = useState( JSON.parse(localStorage.getItem("tasks")) ||[ 
    {
      name: "Build UI",
      priority: "High",
      status: "In Progress",
      due: "Today",
      id: crypto.randomUUID(),
    },

    {
      name: "Learn React",
      priority: "Medium",
      status: "Pending",
      due: "Fri",
      id: crypto.randomUUID(),
    },

    {
      name: "Finish Project",
      priority: "Low",
      status: "Completed",
      due: "Sat",
      id: crypto.randomUUID(),
    },
  ]  );
    

const COLORS = ["orange", "blue", "green"];
const COLORS1= ["red", "orange","green"];
   const completedTasks = tasks.filter((task) => {
    return task.status === "Completed";
  });

  const progressTasks = tasks.filter((task) => {
    return task.status === "In Progress";
  });

  const pendingTasks = tasks.filter((task) => {
    return task.status === "Pending";
  });

const statusData = [
  { name: "In Progress", value: progressTasks.length },
  { name: "Pending", value: pendingTasks.length },
  { name: "Completed", value: completedTasks.length }
];



   const pendingTasksnumber =tasks.length===0 ? 0 : pendingTasks.length / tasks.length;
  const progressTasksnumber = tasks.length===0 ? 0 : progressTasks.length / tasks.length;
  const completedTasksnumber = tasks.length ===0 ?0 :completedTasks.length / tasks.length;
const totalTasksnumber=pendingTasksnumber+progressTasksnumber+completedTasksnumber;

const highpriority= tasks.filter((task)=>{
    return task.priority==="High";
})
const mediumpriority= tasks.filter((task)=>{
    return task.priority==="Medium";
});
const lowpriority = tasks.filter((task)=>{
    return task.priority==="Low";
})
const highprioritynumber=tasks.length===0 ? 0 : highpriority.length;
const mediumprioritynumber=tasks.length===0 ? 0 : mediumpriority.length;
const lowprioritynumber=tasks.length===0 ? 0 : lowpriority.length;
const priorityData= [
{name:"High" ,value :highprioritynumber },
{name:"Medium" , value: mediumprioritynumber},
{name: "High" , value: highprioritynumber}
]



return (
<div>
<h1>Analytics</h1>


      <div className="blocks">
        <div className="total-tasks">
          <p>Total Tasks</p>
          <h2>{tasks.length}</h2>
        </div>

        <div className="completed">
          <p>Completed</p>
          <h2>{completedTasks.length}</h2>
        </div>

        <div className="progress">
          <p>In progress</p>
          <h2>{progressTasks.length}</h2>
        </div>

         <div className="pending">
          <p>Pending</p>
          <h2>{pendingTasks.length}</h2>

        </div>
      </div>
     



<h2>TASK PROGRESS</h2>
          
          <ul>
            <li>
              
              Completetion Rate - {((completedTasksnumber/totalTasksnumber) * 100).toFixed(2)}%
            </li>

            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${(completedTasksnumber/totalTasksnumber) * 100}%` }}
              ></div>
            </div>

          </ul>

 <h2>PRIORITY DISTRIBUTION</h2>

<ul>

<li>
 High - {highprioritynumber}

</li>

<li>
    Medium - {mediumprioritynumber}
</li>

<li>
    low - {lowprioritynumber}
</li>


</ul> 



 <div className="task-status">
          <p>TASK STATUS</p>

          <div>
            <ul>
              <li>In Progress - {progressTasks.length}</li>
              <li>Pending - {pendingTasks.length}</li>
              <li>Completed - {completedTasks.length}</li>
            </ul>
          </div>
        </div>



<PieChart width={400} height={300}>
  <Pie
    data={statusData}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    outerRadius={100}
    label
  >
    {statusData.map((entry, index) => (
      <Cell key={index}
         fill={COLORS[index]}
      />
    ))}
  </Pie>

  <Tooltip />
  <Legend />
</PieChart>



<PieChart width={400} height={300}>
  <Pie
    data={priorityData}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    outerRadius={100}
    label
  >
    {statusData.map((entry, index) => (
      <Cell key={index}
         fill={COLORS1[index]}
      />
    ))}
  </Pie>

  <Tooltip />
  <Legend />
</PieChart>





</div>






);







}
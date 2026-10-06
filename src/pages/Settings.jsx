
import { useState, useEffect } from 'react';
import './Settings.css'
export function Settings({isDark, setDark}){


const [isNotifications,setNotifications]=useState(localStorage.getItem("notifications")=="true");
const [isPriority,setisPriority]= useState(localStorage.getItem("Priority") || "");
const [isStatus, setisStatus]= useState(localStorage.getItem('status') || "");
const [newModal,setNewModal]=useState(false);
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
 useEffect(()=>{
      localStorage.setItem("tasks",JSON.stringify(tasks));
     },[tasks]);
return (

<div>
<h1>Settings</h1>
<h2>Profile Settings</h2>
<div className="Profile">

<p>Name: Charan</p>

<p>Email : charan@gmail.com</p>
</div>
  <h2>Preferences</h2>
<div className="Preferences">
 
<div>
  <p>Theme:</p>
  <button
  onClick={()=>{
    setDark(!isDark);
  }} 
  className={isDark?"LightMode" :"DarkMode"}
  
  >{isDark?"Light" : "Dark"}</button>

</div>
<div>
<p>Notifications </p>
<button onClick={()=>{
  const newValue= !isNotifications;
  setNotifications(newValue);
  localStorage.setItem("notifications",newValue);
}

}>
  {isNotifications?"OFF" : "ON"}
</button>
</div>
</div>
<h2>Task Settings</h2>

<div className="Task-settings">
  <div>
<p>Default Priority : </p>
<select name="settings-priority" id="settings-priority" 
value={isPriority}
onChange={(event)=>{
  setisPriority(event.target.value);
  localStorage.setItem("Priority",event.target.value);
}}
>

<option value="">Select Priority</option>
<option value="Low">Low</option>
<option value="Medium">Medium</option>
<option value="High">High</option>

</select>
  </div>
<div>
<p>Default Status</p>
<select name="default-status" id="default-status"
value={isStatus}
onChange={
  (event)=>{
    setisStatus(event.target.value);
    localStorage.setItem("status", event.target.value);
  }
}

>

<option value="">Select Status</option>
<option value="Pending">Pending</option>
<option value="In Progress">In progress</option>
<option value="Completed">Completed</option>




</select>
</div>


</div>
<h2>Danger Zone</h2>

<div className="Danger-zone">
<div>
    <button  
        
       onClick={()=>{
        setNewModal(true);
       }}
        
        >Clear All Tasks</button>
 {newModal &&   <div className="confirmation">
          <p>Are you sure you want to delete all tasks?</p>
          <div className='confirmation-buttons'>

<button onClick={()=>{
            setNewModal(false);
          }}>Cancel</button>
          <button onClick={()=>{
            setTasks([]);
            setNewModal(false);
          }}>Delete All</button>






          </div>
          
       </div> }

</div>

</div>


</div>




);







}
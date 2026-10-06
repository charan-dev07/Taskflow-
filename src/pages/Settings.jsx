
import { useState } from 'react';
import './Settings.css'
export function Settings({isDark, setDark}){


const [isNotifications,setNotifications]=useState(localStorage.getItem("notifications")=="true");
const [isPriority,setisPriority]= useState(localStorage.getItem("Priority") || "");
const [isStatus, setisStatus]= useState(localStorage.getItem('status') || "");
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

<p>[Clear All Tasks]</p>
</div>


</div>




);







}
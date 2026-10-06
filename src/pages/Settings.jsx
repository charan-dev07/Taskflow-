
import { useState } from 'react';
import './Settings.css'
export function Settings({isDark, setDark}){


const [isNotifications,setNotifications]=useState(localStorage.getItem("notifications")=="true");


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
<p>Default Priority : [Medium]</p>
<p>Default Status : [Pending]</p>

</div>
<h2>Danger Zone</h2>

<div className="Danger-zone">

<p>[Clear All Tasks]</p>
</div>


</div>




);







}
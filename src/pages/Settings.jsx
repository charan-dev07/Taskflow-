
import './Settings.css'
import { useState, useEffect } from 'react';
export function Settings(){
const [isDark, setDark] = useState(
  localStorage.getItem("darkMode") === "true"
);

useEffect(() => {
  document.body.classList.toggle("dark-mode", isDark);
  localStorage.setItem("darkMode", isDark);
}, [isDark]);


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
  <p>Theme</p>
  <button
  onClick={()=>{
    setDark(!isDark);
  }} 
  className={isDark?"LightMode" :"DarkMode"}
  
  >{isDark?"Light" : "Dark"}</button>

</div>
<p>Notifications: [On/Off] </p>
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
import "./Sidebar.css";

import { Link } from "react-router";

export function Sidebar(){

return (
<div>




<div className="side-bar">
    <div className="brand-logo">
<img className="logo-1" src="/Taskflow.png" alt="" />
    </div>
 <div className="flex-1">
<img className="logo" src="/data-visualization.png" alt="" />
<Link to="/" >DashBoard</Link>
</div>

<div className="flex-1">
<img className="logo" src="/task.png" alt="" />

<Link to="/MyTasks">My Tasks</Link>
</div>

<div className="flex-1">

    <img className="logo " src="/inbox.png" alt="" />
<div>Inbox</div>
</div>



<div className="flex-1">

<img className="logo" src="/calender.png" alt="" />
<div>Calender</div>
</div>


<div className="flex-1">
    <img  className="logo" src="/report.png" alt="" />
    <div>Reports</div>
</div>

<div className="flex-1">
    <img className="logo" src="/portfolio.png" alt="" />
    <div>Portfolio</div>
</div>



<h4>Workspace</h4>


<div className="flex-1">
    <img className="logo" src="/project.png" alt="" />
    <div>Projects</div>
</div>


<div className="flex-1">
<img className="logo" src="/Analytics.png" alt="" />
<Link to="/Analytics">Analytics</Link>
</div>

<h4></h4>

<div className="flex-1">
    <img className="logo" src="/settings.png" alt="" />
    
<Link to="/Settings">Settings</Link>
</div>


<div className="flex-1">
    <img className="logo" src="/help.png" alt="" />
<div>Help</div>
</div>


<div className="flex-1">
<img className="logo" src="/profile.png" alt="" />

<div>
    Your Profile
</div>
</div>

</div>













</div>












);







}
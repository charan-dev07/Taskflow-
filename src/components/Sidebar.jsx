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
<span>
<Link to="/" >DashBoard</Link>
</span>

</div>

<div className="flex-1">
<img className="logo" src="/task.png" alt="" />
<span>
    
<Link to="/MyTasks">My Tasks</Link>
</span>
</div>

<div className="flex-1">

    <img className="logo " src="/inbox.png" alt="" />
    <span><div>Inbox</div></span>

</div>



<div className="flex-1">

<img className="logo" src="/calender.png" alt="" />
<span>
    <div>Calender</div>

</span>
</div>


<div className="flex-1">
    <img  className="logo" src="/report.png" alt="" />
    <span>
            <div>Reports</div>

    </span>
</div>

<div className="flex-1">
    <img className="logo" src="/portfolio.png" alt="" />
    <span>
            <div>Portfolio</div>

    </span>
</div>


<span>
    <h4>Workspace</h4>

</span>


<div className="flex-1">
    <img className="logo" src="/project.png" alt="" />
    <span>
            <div>Projects</div>

    </span>
</div>


<div className="flex-1">
<img className="logo" src="/Analytics.png" alt="" />
<span>
    <Link to="/Analytics">Analytics</Link>

</span>
</div>

<h4></h4>

<div className="flex-1">
    <img className="logo" src="/settings.png" alt="" />
    <span>
        <Link to="/Settings">Settings</Link>

    </span>
</div>


<div className="flex-1">
    <img className="logo" src="/help.png" alt="" />
    <span><div>Help</div></span>

</div>


<div className="flex-1">
<img className="logo" src="/profile.png" alt="" />
<span><div>
    Your Profile
</div></span>

</div>

</div>













</div>












);







}
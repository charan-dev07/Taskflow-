import { useState, useEffect } from "react";
import "./Mytasks.css"
export function MyTasks({searchFilter}){






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



   
  const [newModal,setNewModal]=useState(false);
const [filterPriority,setFilterPriority]=useState("All");
  const [isModal, setModal] = useState(false);
  const [filterStatus,setFilterStatus]=useState("All");
  const [newTask, setnewTask] = useState({
    name: "",
    priority: "",
    status: "",
    due: "",
  });


  
function deleteTask(clickedId) {
    const remainingTasks = tasks.filter((task) => {
      return task.id !== clickedId;
    });

    setTasks(remainingTasks);
  }

  const [editedTaskId, setEditedTaskId] = useState(null);

  function editedTask(editedId) {
    const editingTask = tasks.find((task) => {
      return task.id === editedId;
    });

    setnewTask({
      ...editingTask,
    });

    setEditedTaskId(editedId);

    setModal(true);
  }



  const filteredTasks=tasks.filter((task)=>{
          return filterStatus==="All" || task.status===filterStatus;
        }).filter((task)=>{
          return searchFilter==="" || task.name.toLowerCase().includes(searchFilter);
        }).filter((task)=>{
          return filterPriority==="All" ||task.priority===filterPriority;
        });
   const priorityOrder={
    Low:1,
    Medium:2,
    High:3
   }
   filteredTasks.sort((a,b)=>{
    return priorityOrder[b.priority]- priorityOrder[a.priority];
   })



    


return (

    <div>
   <h2 style={{textDecoration:"underline"}}>Tasks:</h2>

     <h4>Select Status:</h4>
        <select name="Status" id="status"
          value={filterStatus}
          onChange={(event)=>{
            setFilterStatus(event.target.value);
          }}
        
        >
          <option value="All">All</option>
          <option value="In Progress">In Progress</option>
         <option value="Pending">Pending</option>
         <option value="Completed">Completed</option>
          
        </select>



          <h4>Select Priority:</h4>
             <select name="Priority" id="Priority"
             value={filterPriority}
             onChange={(event)=>{
              setFilterPriority(event.target.value);
             }}
             
             >
               <option value="All">All</option>
              <option value="Low">Low</option>
               <option value="Medium">Medium</option>
              <option value="High">High</option>




             </select>




  <button  className="clear-all-tasks-button"
        
       onClick={()=>{
        setNewModal(true);
       }}
        
        >Clear All Tasks</button>
 {newModal &&   <div className="confirmation">
          <p>Are you sure you want to delete all tasks?</p>
     <div className="confirmation-buttons">
  <button className="cancel" onClick={()=>{
            setNewModal(false);
          }}>Cancel</button>
          <button className="delete-all" onClick={()=>{
            setTasks([]);
            setNewModal(false);
          }}>Delete All</button>

     </div>
        
       </div> }

  <div className="task-heading">
    
   
          <p className="heading">Task</p>
          <p className="heading">Priority</p>
          <p className="heading">Status</p>
          <p className="heading">Due</p>
        </div>

        {
        
        tasks.length===0?<p className="no-tasks">NO TASKS FOUND</p> :
      
      
     filteredTasks.length===0?<p className="no-tasks">NO TASKS FOUND</p> :  filteredTasks.map((task) => {
          return (
        
            <div className="task-row" key={task.id}>
              <div className="Task">
                <p>{task.name}</p>
              </div>

              <div className="Priority">
                <p>{task.priority}</p>
              </div>

              <div className="Status">
                <p>{task.status}</p>
              </div>

              <div className="Due">
                <p>{task.due}</p>
              </div>

              <button
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                delete
              </button>

              <button
                onClick={() => {
                  editedTask(task.id);
                }}
              >
                Edit
              </button>



              


            </div>
          );
        })}

        
    </div>


    );



}
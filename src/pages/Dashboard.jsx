import { useState, useEffect } from "react";

import "./Dashboard.css";

export function Dashboard({searchFilter}) {


    
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

  const changeModal = () => {
    return setModal(!isModal);
  };

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

  const completedTasks = tasks.filter((task) => {
    return task.status === "Completed";
  });

  const progressTasks = tasks.filter((task) => {
    return task.status === "In Progress";
  });

  const pendingTasks = tasks.filter((task) => {
    return task.status === "Pending";
  });

  const pendingTasksnumber =tasks.length===0 ? 0 : pendingTasks.length / tasks.length;
  const progressTasksnumber = tasks.length===0 ? 0 : progressTasks.length / tasks.length;
  const completedTasksnumber = tasks.length ===0 ?0 :completedTasks.length / tasks.length;
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
    <div className="dashboard">
      <p>Welcome-back, Charan ✌️</p>
      <p>Here's what's happening with your tasks today.</p>

      <button
        className="add-task-button"
        onClick={() => {
          setEditedTaskId(null);
          changeModal();
        }}
      >
        Add Task
      </button>

      {isModal && (
        <div>
          <div>
            <h2>Task Added</h2>

            <form
              action=""
              onSubmit={(event) => {
                event.preventDefault();

                if (
                  newTask.name !== "" &&
                  newTask.priority !== "" &&
                  newTask.status !== "" &&
                  newTask.due !== ""
                ) {
                  if (editedTaskId === null) {
              
                    setTasks([
                      ...tasks,
                      {
                        ...newTask,
                        id: crypto.randomUUID(),
                      },
                    ]);
                  } else {
               
                    const updatedTasks = tasks.map((task) => {
                      if (task.id === editedTaskId) {
                        return {
                          ...newTask,
                          id: editedTaskId,
                        };
                      }

                      return task;
                    });

                    setTasks(updatedTasks);
                  }

                  changeModal();

                  setnewTask({
                    name: "",
                    priority: "",
                    status: "",
                    due: "",
                  });

                  setEditedTaskId(null);
                }
              }}
            >
              <input
                value={newTask.name}
                onChange={(event) => {
                  setnewTask({
                    ...newTask,
                    name: event.target.value,
                  });
                }}
                type="text"
                placeholder="Name"
              />
            
              <label htmlFor="">Priority:</label>

              <select
                value={newTask.priority}
                name="priority"
                id="priority"
                onChange={(event) => {
                  setnewTask({
                    ...newTask,
                    priority: event.target.value,
                  });
                }}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              <label htmlFor="">Status:</label>

              <select
                value={newTask.status}
                name="Status"
                id="Status"
                onChange={(event) => {
                  setnewTask({
                    ...newTask,
                    status: event.target.value,
                  });
                }}
              >
                <option value="">Select Status</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>






              <input
                value={newTask.due}
                onChange={(event) => {
                  setnewTask({
                    ...newTask,
                    due: event.target.value,
                  });
                }}
                type="text"
                placeholder="due"
              />

              <button type="button" onClick={changeModal}>
                cancel
              </button>

              {editedTaskId === null && (
                <button type="submit">Submit</button>
              )}

              {editedTaskId !== null && (
                <button type="submit">Save</button>
              )}
            </form>
          </div>
        </div>
      )}

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
      </div>

      <div className="middle-part">
        <div className="task-progress">
          <p>TASK PROGRESS</p>
          
          <ul>
            <li>
              
              Completed - {(completedTasksnumber * 100).toFixed(2)}%
            </li>

            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${completedTasksnumber * 100}%` }}
              ></div>
            </div>

            <li>
              In Progress - {(progressTasksnumber * 100).toFixed(2)}%
            </li>

            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${progressTasksnumber * 100}%` }}
              ></div>
            </div>

            <li>
              Pending - {(pendingTasksnumber * 100).toFixed(2)}%
            </li>

            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${pendingTasksnumber * 100}%` }}
              ></div>
            </div>
          </ul>
        </div>

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
      </div>

      <div className="bottom-part">
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



        <h2 className="recent-tasks">Recent Tasks</h2>
        
        <button  className="clear-all-tasks-button"
        
       onClick={()=>{
        setNewModal(true);
       }}
        
        >Clear All Tasks</button>
 {newModal &&   <div className="confirmation">
          <p>Are you sure you want to delete all tasks?</p>
          <button onClick={()=>{
            setNewModal(false);
          }}>Cancel</button>
          <button onClick={()=>{
            setTasks([]);
            setNewModal(false);
          }}>Delete All</button>
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
    </div>
  );
}
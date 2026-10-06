import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/header";
import { Dashboard } from "./pages/Dashboard";
import { useState, useEffect } from 'react';

import { Route, Routes } from "react-router";
import { MyTasks } from "./pages/MyTasks";
import { Analytics } from "./pages/Analytics";
import { Settings } from "./pages/settings";
import "./App.css"
 function App(){

const [searchFilter,setSearchFilter]=useState("");
const [isDark, setDark] = useState(
  localStorage.getItem("darkMode") === "true"
);
useEffect(() => {
  document.body.classList.toggle("dark-mode", isDark);
  localStorage.setItem("darkMode", isDark);
}, [isDark]);
return(




<div className="app">
<Sidebar/>



<div className="main">
    
<Header 
searchFilter={searchFilter}
setSearchFilter={setSearchFilter}

/>

<Routes>

<Route path="/" element={<Dashboard searchFilter={searchFilter}/>
}> 
</Route>

<Route path="/Mytasks" element={<MyTasks searchFilter={searchFilter}/>}></Route>
<Route    path="/Analytics" element={<Analytics/>}  ></Route>
<Route path="/Settings" element={<Settings isDark={isDark}
setDark={setDark}/>}></Route>

</Routes>

</div>
</div>





);






}
export default App;
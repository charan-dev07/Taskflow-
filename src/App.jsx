import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/header";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";
import "./App.css"
 function App(){

const [searchFilter,setSearchFilter]=useState("");

return(




<div className="app">
<Sidebar/>



<div className="main">
    
<Header 
searchFilter={searchFilter}
setSearchFilter={setSearchFilter}

/>
<Dashboard searchFilter={searchFilter}/>

</div>
</div>





);






}
export default App;
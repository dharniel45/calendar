import React from "react";
import './App.css';

function App() {
    return (
        <div class="fex">
        <h1 class="me">ankora</h1>
        
        <div class="fend">
        <div >
        <a class="sub">Quick Actions</a>
        <h3 class="tem">Search  anything</h3>
        <h3 class="tem">Add a New Project</h3>
        </div>
        <br />
          <div >
        <a class="sub">Manage</a>
        <h3 class="den">Calendar</h3>
        <h3 class="tem">Manage Patients</h3>
        <h3 class="tem">Settings</h3>
        </div>
        
         <div class='get'>
         <img 
         class="img"
          src="data:image/jpeg;base64,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" 
           alt=""
          />
          < a class="fed">Acme Clinic Inc.</a>
          < a class="med">View profile</a>

         </div>
         
         
        
        </div>

         
</div>
    );


}


export default App;
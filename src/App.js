import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Admin from './Admin.js';

import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

import { Inject,ScheduleComponent,Day, Week, Month, Agenda } from  '@syncfusion/ej2-react-schedule';

function Calendar() {
     
  const remoteData = new DataManager({
        url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
        adaptor: new  UrlAdaptor,
        crossDomain: true
  });

     return (
        <div class="float-container">
        <div class="float-child">
        <Admin />
          </div><div class="float-son">    
 <ScheduleComponent currentView="Month"> 
      <Inject services={[Day, Week, Month]} />
       </ScheduleComponent>
      
     </div>
     </div>  
  );
}

export default Calendar;

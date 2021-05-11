import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Level from './Level';
import Humidity from './PopUp';
import Button from '@material-ui/core/Button';
import Daily from './Daily';
import Weekly from './Weekly';
//import Daily from './Historical';
import ProgressBar from "bootstrap-progress-bar";
import ControlledTabs from './ControlledTabs';
import Header from './components/Header';

function App() {

  const [level] = useState([

    { level7: 'livello7' },
    { level6: 'livello6' },
    { level5: 'livello5' },
    { level4: 'livello4' },
    { level3: 'livello3' },
    { level2: 'livello2' },
    { level1: 'livello1' },
    { level0: 'livello0' }
  ]);

  const [popup] = useState([

    { desc: 'Umidità' },
    { desc: 'Temperatura' },
    { desc: 'Pressione' }

  ]);
  var Description = <Daily/>;
  

  return (


    <div className="container d-flex flex-row justify-content-sm-around">
      <div className="row">
        <Header/>
        </div>
      <div className="row"> 
      <div className=" col-sm-1 col1 d-flex flex-fill flex-wrap float-md-right ">

   

              {popup.map((post, index) => (

              <Humidity className="border1 " key={index} desc={post.Umidità} />,
              <Humidity className="border1" key={index} desc={post.Temperatura} />,
              <Humidity className="border1 " key={index} desc={post.Pressione} />
              ))}

          

      </div>
      </div>



<div className="row">
      <div className=" col-sm-4 col2 d-flex flex-fill align-content-sm-start flex-wrap flex-row">

        <div className="border2">
          {/* //map = posso iterare su ogni post e stamparlo */}
          {level.map((post, index) => (

            <Level className="level" key={index} level={post.level0} />
            

          ))}

        </div>
        

      </div>
      </div>

      <ProgressBar animated now={45} />

      <div className="  col-sm-7 d-flex flex-fill align-content-sm-start flex-wrap flex-row">
        {/*https://italia.github.io/bootstrap-italia/docs/organizzare-gli-spazi/griglie/ questo è per avere le colonne nella griglia in basso a dx*/}
        

      
       <Button variant="contained" size="small" color="primary" href="Daily.js" onClick={Description}>
          Giornata
        </Button>
        

        <Button variant="contained" size="small" color="success" href="Weekly.js" onClick={Description = <Weekly/>} >
          Settimana
        </Button>

        <Button variant="contained" size="small" color="success" href="Historical.js" onClick={Description = <Weekly/>}>
          Storico
        </Button>
        

        <div className="border3">

          <div className="descrizione float-md-left">

          {Description}
          {/* <ControlledTabs/> */}

          </div>


        </div>

      </div>


    </div>
  );

}

export default App;





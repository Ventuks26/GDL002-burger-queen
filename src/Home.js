import React, { Component} from "react";
import logo from "./img/logo.png";

class Home extends Component {
    render(){
        return(
    <div className="backgroundHome">
        <div className="col-sm-6">
            <img className="logo" src={logo} />        
        </div>
        <div className=" col-sm-offset-6"> 
            <button type="button" className="start">Inicio</button>
        </div>
    </div>
   
        );
    }
}

 export default Home

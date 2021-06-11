// import { confirmAlert } from "react-confirm-alert";

class Configcontroller{

  host: string;
  port: string;
  password: string;

  constructor(){
    //backend server details
    this.host = "http://3.13.86.187:";
    this.port = "8888";
    this.password = "";
  }

}

var obj = new Configcontroller();
export default obj;

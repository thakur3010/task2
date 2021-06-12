import React from "react";
import Axios from "axios";

function Tab2(){

    const [userData, setUserdata] = React.useState([]);
    const [tab, setTab] = React.useState(false);
    

    function GetData(){
        Axios.get("http://localhost:3001/getdata").then((response)=>{
        setUserdata(response.data);
        })
        setTab(!tab);
    }
    function componentDidMount(){
            GetData();
    }
    function DeleteData(pid){
        Axios.delete(`http://localhost:3001/deletedata/${pid}`)
        // window.location.reload(false);
        console.log(pid);
    }


    return <div>
    
    <div className="databox">
            <button className="boxbttn" onClick={GetData}> GET DATA </button>
            </div>
            
            <table>
  <tbody>

  <tr>
  <th>Sno</th>
  <th>Username</th>
  <th>Number</th>
  <th>Email</th>
  <th>Address</th>
  <th>Delete</th>
  </tr>
  </tbody>
  {tab && <tbody>{userData.map((val,index)=>{return <tr><td>{index+1}</td><td>{val.username}</td><td>{val.number}</td><td>{val.email}</td><td>{val.address}</td>
  <td><button className="btn" onClick={()=>{DeleteData(val.pid)}}> Delete </button></td>
  </tr>})}</tbody>}
  
  
  
</table>
            {/* {tab && <ol>{userData.map((val)=>{return <li typeof="1">{val.username}  {val.address}</li>})} </ol>} */}
        
    </div>
}

export default Tab2;
import React from "react";
import Info from "./secondPage";
import Tab2 from "./Tab2";
function Secondtab(){

    const [tab1,setTab1] = React.useState(false);
    const [tab2,setTab2] = React.useState(false);

    const [sucess,setSucess] = React.useState(false);

    function SuccessMSg(){
        setSucess(true);
        setTimeout(() => {
            setSucess(false);
        }, 3000);
    }

    return <div>
    {sucess === true && <div class="success">
        <strong>Successfull</strong> Information is inserted in the database!
      </div>}
      <div className="block-display">
        <button className="button" onClick={()=>{
            setTab1(!tab1);
        }}>Submit Information</button>
        {tab1 && <Info onTouch={SuccessMSg}/>}
        <button className="button" onClick={()=>{
            setTab2(!tab2);
        }}>View Information</button>
        {tab2 && <Tab2/>}
    </div></div>
}

export default Secondtab;
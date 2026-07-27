import styled from "styled-components";
import Numbers from "./Numbers";
import Totalscore from "./Totalscore";
import Rolldice from "./Rolldice";
import { useState } from "react";



const Gameplay = () => {
 
  const [score , Setscore] = useState(0)
  const [selectednumber, setselectednumber] = useState();
  const [selectdice, setselectdice] = useState(1);
  const [ message , setmessage] = useState("")
  
 

 
 
  
   const handleclickdice = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min) + 1;
  };
  const rolldice = () => {
    if(!selectednumber){
      setmessage("You Have Not Select a Number ");

      return
    }
    const currentdice = handleclickdice(0, 6);
    console.log(currentdice);
    setselectdice(() => currentdice);
    if (selectednumber === currentdice){
    Setscore( (prev)=>prev+selectednumber)
    }
    else{
      Setscore((prev)=>prev-2)
    }
    setselectednumber(undefined)
  };
  const reset=()=>{
    Setscore(0)
  };
  return (
    <Main>
      <div className="topsection">
        <Totalscore  score={score}/>
        <Numbers
         message={message}
         setmessage={setmessage}
          selectednumber={selectednumber}
          setselectednumber={setselectednumber}
        />
      </div>
      <Rolldice
       reset={reset}
        selectdice={selectdice}
        rolldice={rolldice}
      />
   
    </Main>
  );
};

export default Gameplay;

const Main = styled.div`
  max-width: 1400px;
  margin: auto;
  .topsection {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
   @media (max-width: 768px) {
    .topsection {
      flex-direction: column;
      align-items: center;
      gap: 1px;
    }
  }
`;


import { useState } from "react";
import styled from "styled-components";

const Rolldice = (props) => {
  const [image ,showimage]= useState(false)
 const toggelimage=()=>{
  showimage((prev)=>!prev)
 }
  
  return (
    <Dicecontainer>
      <div
        className="dice "
        onClick={() => {
          props.rolldice();
        }}
      >
        <img
          src={`img/di${props.selectdice}.png`}
          alt={`dice${props.selectdice}`}
        />
      </div>
      <p>Click on dice to roll</p>
      <div className="btns">
        <button className="btn" onClick={props.reset}>
          Reset score
        </button>
        <button className="btnr" onClick={toggelimage}>
          Rules
        </button>
      </div>
       <div className="rules">{image&& <img src="img/Frame 17.png" alt="img rules"/>}</div>
      
    </Dicecontainer>
  );
};

export default Rolldice;
const Dicecontainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    max-height: 200px;
    max-width: 200px;
  }
  img {
    height: 200px;
    width: 200px;
  }
  .btns {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .btnr {
    color: white;
    background-color: black;
    transition: 0.3s ease-in;
    cursor: pointer;
    font-size: 20px;
    height: 50px;
    width: 150px;
    border-radius: 10px;
    border: 1px solid black;
    &:hover {
      transition: 0.3s ease-in-out;
      color: black;
      background-color: white;
      cursor: pointer;
      border: 1px solid black;
    }
  }
  .btn {
    color: white;
    background-color: black;
    transition: 0.3s ease-in;
    cursor: pointer;
    font-size: 20px;
    height: 50px;
    width: 150px;
    border-radius: 10px;
    border: 1px solid black;
    &:hover {
      transition: 0.3s ease-in-out;
      color: black;
      background-color: white;
      cursor: pointer;
      border: 1px solid black;
    }
    
  }
  .rules {
    width: 805px;
    height: 205px;
  }
  .rules img {
    width: 800px;
    height: 200px;
  }
  @media (max-width: 768px) {
    img {
      max-width: 150px;
      max-height: 150px;
      line-height: 10px;
    }
    .btnr{
      display: none;
    }
    
    
  }
`;

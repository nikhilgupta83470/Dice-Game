import styled from "styled-components";
const Startgame = (props) => {
  return (
    <Container>
      <div>
        <img src="img/dice.png" alt="dice" />
      </div>
      <div className="text">
        <h1>DICE GAME</h1>
        <Button onClick={props.toggle}>start game</Button>
      </div>
    </Container>
  );
};

export default Startgame;
const Container = styled.div`
  max-width: 1400px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  .text h1 {
    width: 300px;
    font-size: 69px;
    font-weight: bold;
    white-space: nowrap;
  }
    @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 50px ;

    .text h1 {
      font-size: 45px;
      width: auto;
      white-space: normal;
    }

    img {
      width: 250px;
    }
  }
 
`;
const Button = styled.button`
  min-width: 222px;
  border-radius: 11px;
  align-items: end;
  border: none;
  font-size: 15px;
  background-color: black;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s ease-in;

  &:hover {
    transition: 0.3s ease-in-out;
    color: black;
    background-color: white;
    cursor: pointer;
    border: 1px solid black;
  }
`;

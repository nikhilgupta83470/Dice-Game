
import styled from "styled-components";
const Totalscore = (props) => {
    
  return (
    <Main>
      <h1>{props.score}</h1>
      <p>total score</p>
    </Main>
  );
};

export default Totalscore;

const Main = styled.div`
max-width: 200px;
text-align: center;
margin: 0;
 h1
 {
    font-size: 80px;margin: 0;padding: 0;
    line-height: 60px;
 }
p{
    font-size: 24px;
    font-weight: 500;padding: 0;margin: 0;
}
`;

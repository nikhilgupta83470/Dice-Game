import styled from "styled-components";

const Numbers = (props) => {
  const arrnumbera = [1, 2, 3, 4, 5, 6];
  const solveerror = (value) => {
    props.setselectednumber(value);
    props.setmessage("");
  };

  return (
    <Numberconainer>
      <p className="topp">{props.message} </p>
      <div className="flex">
        {arrnumbera.map((value, i) => (
          <Box
            key={i}
            isSelected={value === props.selectednumber}
            onClick={() => {
              solveerror(value);
            }}
          >
            {value}
          </Box>
        ))}
      </div>

      <p className="downp">Select number </p>
    </Numberconainer>
  );
};

export default Numbers;

const Numberconainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 23px;
  }
  .topp {
    line-height: 5px;
    color: red;
  }
  .downp {
    font-size: 24px;
    font-weight: 700;
    align-items: end;
    line-height: 10px;
  }
`;

const Box = styled.div`
  height: 55px;
  width: 55px;
  border: 2px solid black;
  font-weight: 700;
  font-size: 20px;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
    gap: 10px;
  }
`;

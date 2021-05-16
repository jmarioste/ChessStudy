import styled from "styled-components";
/* height: ${window.innerHeight - 80}px; */
export const StyledForm = styled.div`
  margin: 0;
  #form {
    margin-top: 100px;
    background-color: #262421;
    font-size: 1.3em;
    color: #bababa;
    padding: 80px;

    .alternative {
      margin-top: 50px;
      text-align: center;
      font-size: 0.8em;

      a {
        color: #bababa;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
  h1 {
    font-weight: normal;
  }
`;

export const Alternative = styled.div`
  margin-top: 50px;
  text-align: center;
  font-size: 0.8em;

  a {
    color: #bababa;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

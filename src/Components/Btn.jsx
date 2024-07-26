import styled from "styled-components";

const SubmitButton = styled.button`
  text-align: center;
  /* Headline 2 */
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.36px;
  width: 100%;
  max-width: 335px;
  height: 65px;
  flex-shrink: 0;
  position: absolute;
  bottom: 20px;

  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.disabled ? "#727272" : "#f4f4f4")};
  background-color: ${(props) => (props.disabled ? "#1f1f1f" : "#101010")};
`;

export default SubmitButton;

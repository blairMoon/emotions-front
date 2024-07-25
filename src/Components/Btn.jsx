import styled from 'styled-components';

const SubmitButton = styled.button`
  color: var(--Gray-01, #727272);
  text-align: center;
  /* Headline 2 */
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
  background: var(--Black-02, #1f1f1f);
  letter-spacing: -0.36px;
  width: 335px;
  height: 65px;
  flex-shrink: 0;
  margin-top: 134px;
  padding: 10px 20px;

  color: #f4f4f4;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export default SubmitButton;
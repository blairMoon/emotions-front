import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 어두운 투명도 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  width: 80%;
`;

const Message = styled.p`
  color: black;

  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #101010;
  color: white;
  border: none;
  font-weight: 700;
  border-radius: 5px;
  padding: 7px 12px;
  font-size: 0.8em;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const CuteAlert = ({ onClose }) => (
  <Overlay>
    <Modal>
      <Message>
        현재 글로는 감정을 읽을 수가 없어요!
        <br /> 좀 더 자세히 기록해주세요 .
      </Message>
      <Button type="none" onClick={onClose}>
        확인
      </Button>
    </Modal>
  </Overlay>
);

export default CuteAlert;

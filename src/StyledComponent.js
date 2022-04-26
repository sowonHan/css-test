import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  /* JSX에서는 if문 사용할 수 없고 삼항연산자랑 && ||만 사용 가능,,,
(클래스룸 react 첫수업 문서 확인)
||니까 props.color가 참(설정 있음)이면 전자가 실행, 거짓(설정 없어서 빈문자)이면 후자가 실행 */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgb(255, 255, 255, 0.9);
  }

  ${(props) =>
    // &&니까 props.inverted가 참이면 후자가 실행, 거짓이면 전자가 실행
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `};

  /* css + 결합자는 인접 형제, 즉 바로 뒤에 위치하면서 같은 부모를 공유하는 요소를 선택.
  셋 다 Button 컴포넌트니까 &는 4개 전부 다 해당되고, 버튼 컴포넌트는 styled.button니까 버튼 태그이기도 하므로 '안녕하세요2'와 '테두리만'과 '테스트1' 모두 margin-left가 적용됐다.
  '테스트1' 다음에 오는 일반 버튼 태그인 '테스트2'도 적용되고 있다! */
  & + button {
    margin-left: 1rem;
  }
`;

function StyledComponent(props) {
  return (
    <Box color="black">
      <Button>안녕하세요1</Button>
      <Button>안녕하세요2</Button>
      <Button inverted={true}>테두리만</Button>
      <Button>테스트1</Button>
      <button>테스트2</button>
    </Box>
  );
}

export default StyledComponent;

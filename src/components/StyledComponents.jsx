// 変数名は何でもよいので、styled-componentsをインポートする
import styled from "styled-components";

export const StyledComp = () => {
  return (
    <Container>
      <STitle>- Styled JSX -</STitle>
      <SButton>FIGHT!</SButton>
    </Container>
  );
};

// スタイルをあてたコンポーネントを作成
const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3b84a8;
`;

const SButton = styled.button`
background-color: #abedd8;
border: none;
padding: 8px;
border-radius: 8px;
&:hover {
  background-color: #fff;
  color: #392eff;
`;

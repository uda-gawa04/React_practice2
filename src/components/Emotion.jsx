/** @jsxRuntime classic jsx */ //下の１行だけだとエラーが出たので、解決のため書く
/** @jsx jsx */ //これを書くのが、ReactでEmotionを使うときのルール
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

// sassと同じ書き方
export const Emotion = () => {
  const containaerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // InlineStyleと同じ書き方
  const titleStyle = css({
    margin: 0,
    color: "#3b84a8"
  });

  // styled componentsと似た書き方
  const SButton = styled.button`
  background-color: #abedd8;
border: none;
padding: 8px;
border-radius: 8px;
&:hover {
  background-color: #fff;
  color: #392eff;
  `;

  return (
    <div css={containaerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!</SButton>
    </div>
  );
};

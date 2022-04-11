import styled from "styled-components";

export const ProductImgWrapper = styled.div.attrs((props) => ({
  width: props.size,
}))`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
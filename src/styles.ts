import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#ffC93F",
};

export const GlobalStyle = createGlobalStyle`
body{
    background: #222;
    color: #fff;
}

body, input {
  font-family: "Roboto", sans-serif;
}
`;

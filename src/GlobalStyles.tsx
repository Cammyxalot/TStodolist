import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root{
 --grey: #a9a9a9;
 --red: #FF5862;
 --red-hover:#D83245;
}
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
p,input::placeholder{
 font-size:16px;
 color: var(--grey-input)
}
input:focus{
  outline:none;
}
input{
  padding: 0px;
  font-size:16px;
}

`

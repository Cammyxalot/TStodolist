import styled from "styled-components"
import { GlobalStyle } from "./GlobalStyles"
import * as Todo from "./components/Todo"
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Todo.TodoList></Todo.TodoList>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgb(124, 0, 255);
  background-image: radial-gradient(
    circle,
    rgba(121, 9, 26, 1) 20%,
    rgba(32, 1, 66, 1) 64%
  );
  background-size: 150%;
`

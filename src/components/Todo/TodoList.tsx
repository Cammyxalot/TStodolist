import { useEffect, useState } from "react"
import styled from "styled-components"
import { Search, ChevronUp, ChevronDown } from "react-feather"
import { Button } from "../Ui/Button"
import { Interface } from "readline"
export function TodoList() {
  type Option = {
    name: string
    id: number
    value: string
  }
  interface Ibutton {
    color: "red"
  }
  const [isOpen, setIsOpen] = useState(false)

  const [Options, SetOptions] = useState<Option[]>([
    { name: "Add", id: 1, value: "Add a todo" },
    { name: "Search", id: 2, value: "Search a todo" },
  ])

  const [selectedOption, setSelectedOption] = useState<string>(Options[0].value)
  function toggling() {
    setIsOpen(!isOpen)
  }
  function changeOptions() {
    SetOptions(Options.reverse())
    setSelectedOption(Options[0].value)
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    console.log(Options)
  }, [Options])
  return (
    <Wrapper>
      <InputWrapper>
        <SelectWrapper>
          <SelectOption onClick={toggling}>
            <OptionWrapper theme={isOpen}>
              <OptionHolder>{selectedOption}</OptionHolder>
            </OptionWrapper>
            {isOpen && (
              <OptionWrapper>
                <OptionHolder onClick={changeOptions}>
                  {Options[1].value}
                </OptionHolder>
              </OptionWrapper>
            )}
          </SelectOption>
          {isOpen && (
            <ChevronUp
              style={{ alignSelf: "center" }}
              color="white"
              onClick={toggling}
            />
          )}
          {!isOpen && (
            <ChevronDown
              style={{ alignSelf: "center" }}
              color="white"
              onClick={toggling}
            />
          )}
        </SelectWrapper>
        <Barz></Barz>
        <InputText placeholder="research" />
        <Button>
          <Search color="white" size={16} />
        </Button>
      </InputWrapper>
      <Main>
        <NotStared />
        <InProgress />
        <Done />
      </Main>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  height: 90%;
  width: 80%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  height: 48px;
  padding: 0px 8px;
  margin: 3rem;
  background: rgba(32, 1, 66, 1);
`
const InputText = styled.input.attrs({ type: "text", name: "content" })`
  height: 48px;
  background: transparent;
  border: none;
  color: var(--grey);
`

const Main = styled.div`
  padding: 0rem 3rem;
  flex: 1;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  column-gap: 5%;
`
const NotStared = styled.div`
  border: 1px white solid;
`

const InProgress = styled.div`
  border: 1px white solid;
`

const Done = styled.div`
  border: 1px white solid;
`
const SelectWrapper = styled.div`
  display: flex;
  padding: 0px 8px;
  height: 48px;
  line-height: 48px;
`
const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
  line-height: 32px;
  margin: 0px;
  text-align: center;
  color: var(--grey);
  cursor: pointer;
  background: rgba(32, 1, 66, 1);
  border-bottom: ${(props) =>
    props.theme === true ? "1px solid white" : "none"};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
const OptionHolder = styled.p`
  width: 100px;
`

const SelectOption = styled.div``

const Barz = styled.div`
  height: 24px;
  width: 1px;
  background: rgba(255, 255, 255, 0.4);
  margin: 0px 16px;
`

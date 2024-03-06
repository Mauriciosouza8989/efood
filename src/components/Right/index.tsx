import { ReactElement } from "react"
import { Component, Container } from "./style"
type Props ={
  children: ReactElement | boolean
  onclick: () => void
}

export const Right = ({ onclick, children}:Props) => {
  return(
    <Container>
      <div onClick={onclick}></div>
      <Component>{children}</Component>
    </Container>
  )
}

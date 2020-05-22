import React from "react"
import { StyledJumbo } from "../styles/components"
import Image from "./image"

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>Consigue nuestros productos por oferta</h2>
        <small>{description}</small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}

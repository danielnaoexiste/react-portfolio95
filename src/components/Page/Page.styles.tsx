import styled from "styled-components"

export const StyledBackground = styled.div({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
})

export const IconContainer = styled.div({
  display: "flex",
  padding: "8px",
  marginBottom: "20px",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
})

export const IconContainerText = styled.p({
  width: "60px",
  display: "flex",
  marginTop: "6px",
  textAlign: "center",
  alignItems: "flex-start",
  justifyContent: "center",
  color: "white",
  cursor: "pointer",
})

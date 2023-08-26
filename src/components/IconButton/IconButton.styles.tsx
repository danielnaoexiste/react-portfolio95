import styled from "styled-components"

export const StyledIconButton = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  padding: "10px 0px",
  width: "64px",
})

export const StyledIconText = styled.span({
  marginTop: "6px",
  fontSize: ".8rem",
  display: "block",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  width: "100%",
})

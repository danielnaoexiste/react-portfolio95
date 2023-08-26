import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
`

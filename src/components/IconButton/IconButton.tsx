import { Tooltip } from "@react95/core"

import { StyledIconButton, StyledIconText } from "./IconButton.styles"

interface IconButtonProps {
  text?: string | undefined
  icon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined
  onClick: () => void
}

export const IconButton = ({ text, icon, onClick }: IconButtonProps) => {
  return (
    <Tooltip text={text}>
      <StyledIconButton onClick={() => onClick()}>
        {icon}
        <StyledIconText>{text}</StyledIconText>
      </StyledIconButton>
    </Tooltip>
  )
}

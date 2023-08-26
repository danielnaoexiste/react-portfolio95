import type { ReactNode } from "react"

import { useContextMenu } from "../../hooks/useContextMenu"

interface ContextMenuContainerProps {
  menu?: ReactNode
}

export const ContextMenuContainer = ({
  menu,
}: ContextMenuContainerProps): JSX.Element => {
  const { xPos, containerRef, yPos, showMenu } = useContextMenu()

  if (!showMenu) return <></>

  return (
    <span
      ref={containerRef}
      style={{
        position: "absolute",
        top: yPos,
        left: xPos,
        zIndex: 1000,
      }}
    >
      {menu}
    </span>
  )
}

import type { FC, ReactNode } from "react"

import { Box } from "../Box"
import { ContextMenu, ContextMenuContainer } from "../ContextMenu"
import { StyledBackground } from "./Page.styles"
import { PageIcons } from "./PageIcons"

interface PageProps {
  children: ReactNode
  description?: string
  title?: string
}

export const Page: FC<PageProps> = ({ children }) => {
  return (
    <StyledBackground>
      <Box as="main">
        {children}

        <PageIcons />
        <ContextMenuContainer menu={<ContextMenu />} />
      </Box>
    </StyledBackground>
  )
}

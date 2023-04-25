import type { FC, ReactNode } from 'react';
import { Box } from '../Box';

import { PageIcons } from './PageIcons';

import styles from './Page.module.css';
import { ContextMenu, ContextMenuContainer } from '../ContextMenu';

interface PageProps {
  children: ReactNode;
  description?: string;
  title?: string;
}

export const Page: FC<PageProps> = ({ children }) => {
  const { background } = styles;

  return (
    <>
      <div className={background}>
        <Box as="main">
          {children}

          <PageIcons />
          <ContextMenuContainer menu={<ContextMenu />} />
        </Box>
      </div>
    </>
  );
};

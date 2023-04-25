import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import type { DesktopContextType } from '../interfaces/desktop';

import type themes from '@react95/core/@types/ThemeProvider/themes';

interface Props {
  children: ReactNode;
}

export const DesktopContext = createContext<DesktopContextType | null>(null);

export const DesktopProvider: FC<Props> = ({ children }) => {
  const [showCv, setShowCv] = useState(false);
  const [showAbout, setShowAbout] = useState(true);
  const [showGames, setShowGames] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSettings, setShowSettings] = useState(true);

  const [theme, setTheme] = useState<keyof typeof themes>('win95');

  const [games, setGames] = useState({
    cavescape: false,
    torrato: false,
    awaken: false,
    spacial: false,
    miner: false,
  });

  const [projects, setProjects] = useState({
    froggy: false,
    surigu: false,
    portfolio: false,
    yeop: false,
    beeper: false,
  });

  return (
    <DesktopContext.Provider
      value={{
        showAbout,
        showCv,
        showProjects,
        showGames,
        showSettings,
        games,
        projects,
        theme,
        setShowAbout,
        setShowCv,
        setShowProjects,
        setShowSettings,
        setShowGames,
        setGames,
        setProjects,
        setTheme,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
};

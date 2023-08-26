import type themes from "@react95/core/@types/ThemeProvider/themes"

export type DesktopContextType = {
  showAbout: boolean
  showCv: boolean
  showProjects: boolean
  showSettings: boolean
  showGames: boolean
  games: Record<string, boolean>
  projects: Record<string, boolean>
  theme: keyof typeof themes
  setShowAbout: (show: boolean) => void
  setShowCv: (show: boolean) => void
  setShowProjects: (show: boolean) => void
  setShowSettings: (show: boolean) => void
  setShowGames: (show: boolean) => void
  setGames: (games: any) => void
  setProjects: (games: any) => void
  setTheme: (theme: any) => void
}

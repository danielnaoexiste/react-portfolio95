import { useMemo } from "react"
import { useTranslation } from "react-i18next"

import { Taskbar } from "../../components/Taskbar"
import { useDesktopContext } from "../../context/DesktopContext"
import { DesktopAboutModal } from "./About"
import { DesktopCvModal } from "./CV"
import { DesktopGamesModal } from "./Games"
import { DesktopGamesGame } from "./Games/DesktopGamesGame"
import { DesktopProjectsModal } from "./Projects"
import { DesktopProjectsProject } from "./Projects/DesktopProjectsProject"
import { DesktopSettingsModal } from "./Settings"

export const Desktop = () => {
  const {
    showAbout,
    showCv,
    showGames,
    showProjects,
    showSettings,
    games,
    projects,
  } = useDesktopContext()

  const { t } = useTranslation()

  const gameKeys = useMemo(() => t("gamesModal.games", { returnObjects: true }), [t])

  const projectKeys = useMemo(
    () => t("projectsModal.projects", { returnObjects: true }),
    [t],
  )

  return (
    <>
      {showSettings && <DesktopSettingsModal />}

      {showCv && <DesktopCvModal />}
      {showAbout && <DesktopAboutModal />}
      {showGames && <DesktopGamesModal />}
      {showProjects && <DesktopProjectsModal />}

      {Object.entries(gameKeys).map(([key, value]) => {
        return (
          games[key as keyof typeof games] && (
            <DesktopGamesGame
              key={key}
              translationKey={key}
              title={value.title}
              icon={value.icon}
              src={value.src}
              sourceLink={value.srcLink}
              playLink={value.playLink}
            />
          )
        )
      })}

      {Object.entries(projectKeys).map(([key, value]) => {
        return (
          projects[key as keyof typeof projects] && (
            <DesktopProjectsProject
              key={key}
              translationKey={key}
              title={value.title}
              icon={value.icon}
              preview={value.preview}
              previewDir={value.previewDir}
              src={value.src}
              front={value.front}
              back={value.back}
            />
          )
        )
      })}

      <Taskbar />
    </>
  )
}

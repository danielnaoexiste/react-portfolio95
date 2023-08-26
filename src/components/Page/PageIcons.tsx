import { Computer3, Joy102, Notepad, Progman1, Settings } from "@react95/icons"
import { useTranslation } from "react-i18next"

import { useDesktopContext } from "../../context/DesktopContext"
import { IconContainer, IconContainerText } from "./Page.styles"

export const PageIcons = (): JSX.Element => {
  const { t } = useTranslation()

  const { setShowAbout, setShowCv, setShowGames, setShowProjects, setShowSettings } =
    useDesktopContext()

  return (
    <>
      <IconContainer onClick={() => setShowAbout(true)}>
        <Notepad variant="32x32_4" />
        <IconContainerText>{t("icons.about")}</IconContainerText>
      </IconContainer>
      <IconContainer onClick={() => setShowProjects(true)}>
        <Progman1 variant="32x32_4" />
        <IconContainerText>{t("icons.projects")}</IconContainerText>
      </IconContainer>
      <IconContainer onClick={() => setShowGames(true)}>
        <Joy102 variant="32x32_4" />
        <IconContainerText>{t("icons.games")}</IconContainerText>
      </IconContainer>
      <IconContainer onClick={() => setShowCv(true)}>
        <Computer3 variant="32x32_4" />
        <IconContainerText>{t("icons.cv")}</IconContainerText>
      </IconContainer>
      <IconContainer onClick={() => setShowSettings(true)}>
        <Settings variant="32x32_4" />
        <IconContainerText>{t("icons.settings")}</IconContainerText>
      </IconContainer>
    </>
  )
}

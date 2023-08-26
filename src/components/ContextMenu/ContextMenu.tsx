import { List } from "@react95/core"
import { useTranslation } from "react-i18next"

import { useDesktopContext } from "../../context/DesktopContext"

export const ContextMenu = (): JSX.Element => {
  const { t } = useTranslation()

  const { setShowCv, setShowGames, setShowProjects, setShowAbout, setShowSettings } =
    useDesktopContext()

  return (
    <List style={{ fontSize: 14, width: "128px" }}>
      <List.Item onClick={() => setShowCv(true)}>{t("contextMenu.cv")}</List.Item>
      <List.Divider />
      <List.Item onClick={() => setShowGames(true)}>
        {t("contextMenu.games")}
      </List.Item>
      <List.Item onClick={() => setShowProjects(true)}>
        {t("contextMenu.projects")}
      </List.Item>
      <List.Item onClick={() => setShowAbout(true)}>
        {t("contextMenu.about")}
      </List.Item>
      <List.Divider />
      <List.Item onClick={() => setShowSettings(true)}>
        {t("contextMenu.properties")}
      </List.Item>
    </List>
  )
}

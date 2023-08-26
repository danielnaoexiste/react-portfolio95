import { Cursor, List, TaskBar } from "@react95/core"
import { Computer3, Joy102, Notepad, Progman1, Settings, User } from "@react95/icons"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import type { ISocials } from "../../common/constants"
import { socials } from "../../common/constants"
import { useDesktopContext } from "../../context/DesktopContext"
import { StyledLink } from "./Taskbar.styles"

const ListItem = styled(List.Item)<{ type: keyof typeof Cursor }>`
  ${({ type }) => Cursor[type]};
`

export const Taskbar = (): JSX.Element => {
  const { setShowAbout, setShowCv, setShowGames, setShowProjects, setShowSettings } =
    useDesktopContext()

  const { t } = useTranslation()
  return (
    <TaskBar
      list={
        <List>
          <ListItem type="Pointer" icon={<User variant="32x32_4" />}>
            {t("taskbar.socials")}
            <List>
              {socials.map(({ url, name, icon }: ISocials) => (
                <List.Item
                  //@ts-ignore
                  as={StyledLink}
                  type="Pointer"
                  href={url}
                  key={url}
                  icon={icon}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {name}
                </List.Item>
              ))}
            </List>
          </ListItem>
          <List.Divider />
          <ListItem
            type="Pointer"
            icon={<Progman1 variant="32x32_4" />}
            onClick={() => setShowProjects(true)}
          >
            {t("taskbar.projects")}
          </ListItem>
          <ListItem
            type="Pointer"
            icon={<Joy102 variant="32x32_4" />}
            onClick={() => setShowGames(true)}
          >
            {t("taskbar.games")}
          </ListItem>
          <ListItem
            type="Pointer"
            icon={<Computer3 variant="32x32_4" />}
            onClick={() => setShowCv(true)}
          >
            {t("taskbar.cv")}
          </ListItem>
          <ListItem
            type="Pointer"
            icon={<Notepad variant="32x32_4" />}
            onClick={() => setShowAbout(true)}
          >
            {t("taskbar.about")}
          </ListItem>
          <List.Divider />
          <ListItem
            type="Pointer"
            icon={<Settings variant="32x32_4" />}
            onClick={() => setShowSettings(true)}
          >
            {t("taskbar.settings")}
          </ListItem>
        </List>
      }
    />
  )
}

import { Frame, Modal } from "@react95/core"
import { Computer3, Progman1 } from "@react95/icons"
import { useTranslation } from "react-i18next"

import { menu } from "../../../common/constants"
import { IconButton } from "../../../components/IconButton"
import { useDesktopContext } from "../../../context/DesktopContext"
import { Grid } from "./DesktopProjectsModal.styles"

export const DesktopProjectsModal = () => {
  const { setShowProjects, setProjects } = useDesktopContext()
  const { t } = useTranslation()

  return (
    <Modal
      width="250"
      height="260"
      title={t("projectsModal.title")}
      icon={<Progman1 variant="32x32_4" />}
      closeModal={() => setShowProjects(false)}
      menu={menu(() => setShowProjects(false))}
      defaultPosition={{ x: 260, y: 280 }}
    >
      <Frame bg="#fff" h="100%" boxShadow="in" fontSize="16px" padding={10}>
        <Grid>
          <IconButton
            icon={
              <img
                src={t("projectsModal.projects.froggy.icon") ?? ""}
                width={32}
                style={{ borderRadius: "50%" }}
              />
            }
            text={t("projectsModal.projects.froggy.title") ?? ""}
            onClick={() =>
              setProjects((projects: any) => ({ ...projects, froggy: true }))
            }
          />
          <IconButton
            icon={
              <img
                src={t("projectsModal.projects.surigu.icon") ?? ""}
                width={32}
                style={{ borderRadius: "50%" }}
              />
            }
            text={t("projectsModal.projects.surigu.title") ?? ""}
            onClick={() =>
              setProjects((projects: any) => ({ ...projects, surigu: true }))
            }
          />
          <IconButton
            icon={
              <img
                src={t("projectsModal.projects.portfolio.icon") ?? ""}
                width={32}
                style={{ borderRadius: "50%" }}
              />
            }
            text={t("projectsModal.projects.portfolio.title") ?? ""}
            onClick={() =>
              setProjects((projects: any) => ({ ...projects, portfolio: true }))
            }
          />
          <IconButton
            icon={<Computer3 />}
            text={t("projectsModal.projects.yeop.title") ?? ""}
            onClick={() =>
              setProjects((projects: any) => ({ ...projects, yeop: true }))
            }
          />
          <IconButton
            icon={
              <img
                src={t("projectsModal.projects.beeper.icon") ?? ""}
                width={32}
                style={{ borderRadius: "50%" }}
              />
            }
            text={t("projectsModal.projects.beeper.title") ?? ""}
            onClick={() =>
              setProjects((projects: any) => ({ ...projects, beeper: true }))
            }
          />
        </Grid>
      </Frame>
    </Modal>
  )
}

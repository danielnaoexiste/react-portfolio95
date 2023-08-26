import { Frame, Modal } from "@react95/core"
import { Joy102 } from "@react95/icons"
import { useTranslation } from "react-i18next"

import { menu } from "../../../common/constants"
import { IconButton } from "../../../components/IconButton"
import { useDesktopContext } from "../../../context/DesktopContext"
import { Grid } from "./DesktopGamesModal.styles"

export const DesktopGamesModal = () => {
  const { setShowGames, setGames } = useDesktopContext()

  const { t } = useTranslation()

  return (
    <Modal
      width="250"
      height="260"
      title={t("gamesModal.title")}
      icon={<Joy102 variant="32x32_4" />}
      closeModal={() => setShowGames(false)}
      menu={menu(() => setShowGames(false))}
      defaultPosition={{ x: 260, y: 0 }}
    >
      <Frame bg="#fff" h="100%" boxShadow="in" fontSize="16px" padding={10}>
        <Grid>
          <IconButton
            icon={
              <img
                src={t("gamesModal.games.cavescape.icon") ?? ""}
                width={32}
                style={{ borderRadius: "50%", border: "1px solid black" }}
              />
            }
            text={t("gamesModal.games.cavescape.title") ?? ""}
            onClick={() => setGames((games: any) => ({ ...games, cavescape: true }))}
          />
          <IconButton
            icon={
              <img
                src={t("gamesModal.games.awaken.icon") ?? ""}
                width={32}
                style={{ borderRadius: "50%" }}
              />
            }
            text={t("gamesModal.games.awaken.title") ?? ""}
            onClick={() => setGames((games: any) => ({ ...games, awaken: true }))}
          />

          <IconButton
            icon={
              <img
                src={t("gamesModal.games.torrato.icon") ?? ""}
                width={32}
                style={{ borderRadius: "50%" }}
              />
            }
            text={t("gamesModal.games.torrato.title") ?? ""}
            onClick={() => setGames((games: any) => ({ ...games, torrato: true }))}
          />
          <IconButton
            icon={
              <img
                src={t("gamesModal.games.spacial.icon") ?? ""}
                width={32}
                style={{ borderRadius: "50%" }}
              />
            }
            text={t("gamesModal.games.spacial.title") ?? ""}
            onClick={() => setGames((games: any) => ({ ...games, spacial: true }))}
          />
        </Grid>
      </Frame>
    </Modal>
  )
}

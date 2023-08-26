import { Fieldset, Modal } from "@react95/core"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"

import { menu } from "../../../../common/constants"
import { useDesktopContext } from "../../../../context/DesktopContext"

type GameProps = {
  translationKey: string
  title: string
  icon: string
  src?: string
  sourceLink: string
  playLink: string
}

export const DesktopGamesGame: React.FC<GameProps> = ({
  translationKey,
  title,
  icon,
  src,
  sourceLink,
  playLink,
}) => {
  const { setGames } = useDesktopContext()
  const { t } = useTranslation()

  const handleClose = () => {
    setGames((games: any) => ({ ...games, [translationKey]: false }))
  }

  const modalButtons = useMemo(() => {
    const btns = []
    if (sourceLink)
      btns.push({
        value: t("actions.source"),
        onClick: () => window.open(sourceLink, "_blank"),
      })
    if (playLink)
      btns.push({
        value: t("actions.play"),
        onClick: () => window.open(playLink, "_blank"),
      })

    return btns
  }, [sourceLink, playLink, t])

  return (
    <Modal
      width={src ? "1080" : "320"}
      height={src ? "820" : "200"}
      title={`${title}.exe`}
      icon={<img src={icon} width={32} style={{ borderRadius: "50%" }} />}
      closeModal={handleClose}
      menu={menu(handleClose)}
      buttons={modalButtons}
      defaultPosition={{ x: 520, y: 0 }}
    >
      {!!src && (
        <Fieldset
          legend={`${t(`gamesModal.games.${translationKey}.title`)}`}
          style={{ marginBottom: "1rem" }}
        >
          <iframe
            src={src}
            allowFullScreen={true}
            width="1024"
            height="564"
          ></iframe>
        </Fieldset>
      )}

      <Fieldset legend={t("actions.about") ?? ""} style={{ marginBottom: ".5rem" }}>
        {t(`gamesModal.games.${translationKey}.description`)}
      </Fieldset>
    </Modal>
  )
}

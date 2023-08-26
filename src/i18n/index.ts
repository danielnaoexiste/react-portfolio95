import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enUS from "./locales/en/en-us.json"
import ptBR from "./locales/pt/pt-br.json"

const resources = {
  "pt-BR": ptBR,
  "en-US": enUS,
}

i18n.use(initReactI18next).init({ resources, lng: navigator.language })

export default i18n

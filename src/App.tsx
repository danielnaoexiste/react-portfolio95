import "@react95/icons/icons.css"
import "./App.css"

import { GlobalStyle, ThemeProvider } from "@react95/core"

import { Page } from "./components/Page"
import { useDesktopContext } from "./context/DesktopContext"
import { Desktop } from "./pages/Desktop"

const App = () => {
  const { theme } = useDesktopContext()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Page>
        <Desktop />
      </Page>
    </ThemeProvider>
  )
}

export default App

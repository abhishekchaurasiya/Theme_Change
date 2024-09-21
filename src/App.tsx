import Theme from "./components/Theme"
import { ThemeProvider } from "./ThemeContext"

const App = () => {


  return (
    <>
      <ThemeProvider>
        <Theme/>
      </ThemeProvider>
    </>
  )
}

export default App

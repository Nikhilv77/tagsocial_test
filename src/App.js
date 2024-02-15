import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { system } from './styles/Themes'

import { useState, useEffect, useRef } from 'react'
import Home from './sections/Home'

import { AnimatePresence } from 'framer-motion'
import SecondSection from './sections/SecondSection'
import ThirdSection from './sections/ThirdSection'
import './font.css'
import FourthSection from './sections/FourthSection'
import Loader from './components/Loader'
import FifthSection from './sections/FifthSection'

function App() {
  const [Loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2300)
  }, [])
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={system}>
        <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
        <AnimatePresence>
              <Home />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
        </AnimatePresence>
      </ThemeProvider>
    </div>
  )
}

export default App

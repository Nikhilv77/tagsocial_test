import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { system } from './styles/Themes'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import './font.css'
import Loader from './components/Loader'
import FaqsPage from './pages/FaqsPage'
import PrivacyPage from './pages/PrivacyPolicyPage'
import HomePage from './pages/HomePage'
import { BrowserRouter,Routes,Route } from 'react-router-dom';



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
        {/* <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence> */}
        <AnimatePresence>
          <BrowserRouter>
          <Routes>
            <Route path='/' element = {<HomePage/>}/>
            <Route path='/faqs' element = {<FaqsPage/>}/>
            <Route path='/terms-and-conditions' element = {<PrivacyPage/>}/>
          </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  )
}

export default App

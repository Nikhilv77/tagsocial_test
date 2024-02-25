import React from 'react'
import Faqs from '../components/faqs/Faqs'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import { MantineProvider, createTheme } from '@mantine/core'
import SecondFooter from '../components/second-footer/SecondFooter'
import { useEffect } from 'react'

const FaqsPage = () => {
  const theme = createTheme({})
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <div style={{ backgroundColor: '#181818' }}>
      <SecondNavbar />
      <MantineProvider theme={theme}>
        <Faqs />
      </MantineProvider>
      <SecondFooter />
    </div>
  )
}

export default FaqsPage

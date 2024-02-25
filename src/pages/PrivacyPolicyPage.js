import React from 'react'
import PrivacyCard from '../components/privacy-card/PrivacyCard'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import { MantineProvider, createTheme } from '@mantine/core'
import SecondFooter from '../components/second-footer/SecondFooter'
import ContactUs from '../components/contactus/ContactUs'
import { useEffect } from 'react'

const PrivacyPage = () => {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  const theme = createTheme({})

  return (
    <div style={{ backgroundColor: '#181818' }}>
      <SecondNavbar />
      <MantineProvider theme={theme}>
        <PrivacyCard />
        <ContactUs />
      </MantineProvider>
      <SecondFooter />
    </div>
  )
}

export default PrivacyPage

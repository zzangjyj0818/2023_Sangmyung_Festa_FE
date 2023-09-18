import React from "react"
import InformationfcnContainer from "../components/container/InformationPage/InformationfcnContainer"
import HeaderContainer from "../components/container/common/HeaderContainer"
import Footer from "../components/common/Footer"
import { SelectedTagProvider } from "./../components/container/InformationPage/SelectedTagContext"

const InformationPage = () => {
  return (
    <>
      <SelectedTagProvider>
        <HeaderContainer name={undefined} type={1} opacity={false} />
        <InformationfcnContainer />
        <Footer />
      </SelectedTagProvider>
    </>
  )
}

export default InformationPage

import React from "react"
import Informationfcn from "../components/container/InformationPage/informationfcn"
import HeaderContainer from "../components/container/common/HeaderContainer"
import Footer from "../components/common/Footer"
import { SelectedTagProvider } from "./../components/container/InformationPage/SelectedTagContext"

const InformationPage = () => {
  return (
    <>
      <SelectedTagProvider>
        <HeaderContainer name={undefined} type={1} opacity={false} />
        <Informationfcn />
        <Footer />
      </SelectedTagProvider>
    </>
  )
}

export default InformationPage

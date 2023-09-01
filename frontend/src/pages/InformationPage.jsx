import React from "react"
import Informationfcn from "../components/container/InformationPage/informationfcn"
import HeaderContainer from "../components/container/common/HeaderContainer"
import Footer from "../components/common/Footer"

const InformationPage = () => {
  return (
    <>
      <HeaderContainer name={undefined} type={1} opacity={false} />
      <Informationfcn />
      <Footer />
    </>
  )
}

export default InformationPage

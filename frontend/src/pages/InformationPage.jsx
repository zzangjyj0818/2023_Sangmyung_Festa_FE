import React from "react"
import Informationfcn from "../components/container/InformationPage/informationfcn"
import HeaderContainer from "../components/container/common/HeaderContainer"
import Footer from "../components/common/Footer"
import '../styles/pages/common.scss';

const InformationPage = () => {
  return (
    <div className="slide-in">
      <HeaderContainer name={undefined} type={1} opacity={false} />
      <Informationfcn />
      <Footer />
    </div>
  )
}

export default InformationPage

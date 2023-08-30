import React from "react"
import Door from "../components/container/InformationPage/door"
import HeaderContainer from "../components/container/common/HeaderContainer";
import Footer from "../components/common/Footer";

const InformationPage = () => {
  return (
    <>
      <HeaderContainer name = {undefined} type = {1}/>
      <Door/>
      <Footer/>
    </>
  )
}

export default InformationPage

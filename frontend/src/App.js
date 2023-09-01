import React, { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const MainPage = lazy(() => import("./pages/MainPage"))
const CreatorPage = lazy(() => import("./pages/CreatorPage"))
const TimelinePage = lazy(() => import("./pages/TimelinePage"))
const InformationPage = lazy(() => import("./pages/InformationPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"))
const DesignUniv = lazy(() => import("./pages/DesignInfoPage"))
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/creator/:category" element={<CreatorPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/*" element={<NotFoundPage />} />
         
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

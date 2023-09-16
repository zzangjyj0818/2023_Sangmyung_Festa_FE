// src/components/container/InformationPage/SelectedTagContext.js
import React, { createContext, useContext, useState } from "react"

const SelectedTagContext = createContext()

export const useSelectedTag = () => {
  return useContext(SelectedTagContext)
}

export const SelectedTagProvider = ({ children }) => {
  const [selectedTag, setSelectedTag] = useState("design")
  const [notMatchingTag, setNotMatchingTag] = useState(null)

  const updateSelectedTag = (tagName, tagId) => {
    setSelectedTag(tagName)
    setNotMatchingTag(tagId)
  }

  return (
    <SelectedTagContext.Provider
      value={{
        selectedTag,
        setSelectedTag,
        notMatchingTag,
        setNotMatchingTag,
        updateSelectedTag,
      }}
    >
      {children}
    </SelectedTagContext.Provider>
  )
}

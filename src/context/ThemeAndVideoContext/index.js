import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleThem: () => {},
  changeTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext

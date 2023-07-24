import React from 'react'
import Routecompo from './Components/RouterCompo'
import { BrowserRouter } from 'react-router-dom'
import LinkCompo from './Components/LinkCompo'
export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <LinkCompo/>
      <Routecompo/>
      </BrowserRouter>
      {/* <Routecompo/> */}
    </div>
  )
}
export default App;
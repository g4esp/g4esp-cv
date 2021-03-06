import React, {useState} from "react"
import moon from "../moon.png"
import sun from "../sun.png"

export default function Heading ({heading: {firstName, lastName, position, tagline, thumb}, children}) {
  const [dark, setDark] = useState(false)
  const changeTheme = () => {
    setDark(!dark)
    if (!dark) {
      document.body.className = "dark"
    } else {
      document.body.className = ""
    }
  }
  return (
  <>
    <div className="switcher">
      <button onClick={changeTheme}>
        <img 
        src={`${dark  ? sun : moon}`} 
        alt="Click to change theme ;)" />
      </button>
    </div>
    <div className="head">
      <div>
        <img src={thumb} alt="G4ESP" />
      </div>
      <div>
        <h1>{`${firstName} ${lastName}`}</h1>
        <p><span>{`// ${position}`}</span></p>
      </div>
    </div>
    <h4><em>{tagline}</em></h4>
    {children}
  </>
  )
}
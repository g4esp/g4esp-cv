import React, {useState} from "react"

export default function Heading ({heading: {firstName, lastName, position, tagline, thumb}, children}) {
  const [dark, setDark] = useState(false)
  const changeTheme = () => {
    setDark(!dark)
    if (!dark) {
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      document.querySelector('button').style.color = 'white'
    } else {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.querySelector('button').style.color = 'black'
    }
  }
  return (
  <>
    <div className="switcher">
      <button onClick={changeTheme}>
        <img 
        src={`${dark  ? 
        "./../src/sun.png"
        : "./../src/moon.png"}`} 
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
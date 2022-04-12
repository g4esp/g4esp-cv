import React, { useState, useEffect } from "react"
import favicon from "./favicon.svg"

import Heading from "./components/Heading"
import Contacts from "./components/Contacts"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"

export const G4ESP = () => {
  const [me, setMe] = useState()
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/g4esp/g4esp-cv/main/src/g4esp.json', {
    })
      .then((raw) => raw.json())
      .then((data) => setMe(data))
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <>
      {me &&
        <>
          <div id="cv">
            <Heading heading={me.Head.Name}>
              <hr />
              <Contacts contacts={me.Head.Contacts} />
            </Heading>
            <hr />
            <Skills skills={me.Skills} />
            <hr />
            <Experience experience={me.Experience} />
            <hr />
            <Education education={me.Education} />
          </div>
          <div className="footer">
            <a href="/" title="G4ESP©22"><img src={favicon} alt="LOGO G4ESP" /></a>
            <p>
              <span className="running-app"><a href="https://g4esp-cv.netlify.app/" target="_blank" title="Running App">Running App</a>&nbsp;-&nbsp;</span><a href="https://github.com/g4esp/g4esp-cv" target="_blank" title="Source Code">Source Code</a> - G4ESP © 2022 - All Rights Reserved</p>
          </div>
          <p id="mdpr">
            I give consent to process my data with the purpose of the recruitment process, in accordance to the Regulation of the European Parliament 679/2016, regarding the protection of natural persons and free movement of such data
          </p>
        </>}
    </>
  )
}
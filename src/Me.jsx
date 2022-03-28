import React, {useState, useEffect} from "react"

import Heading from "./components/Heading"
import Contacts from "./components/Contacts"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education  from "./components/Education"

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
        <Heading heading={me.Head.Name}>
          <hr />
          <Contacts contacts={me.Head.Contacts} />
        </Heading>
        <hr />
        <Skills skills={me.Skills}/>
        <hr />
        <Experience experience={me.Experience}/>
        <hr />
        <Education education={me.Education}/>
      </>
      }
    </>
  )
}
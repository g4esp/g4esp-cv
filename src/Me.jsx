import React, {useState, useEffect} from "react"

import Heading from "./components/Heading"
import Contacts from "./components/Contacts"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education  from "./components/Education"

export const G4ESP = () => {
  
  const [me, setMe] = useState()
  
  useEffect(() => {
    fetch('https://github.com/g4esp/g4esp-cv/blob/0a65b2b8dcc33cbc4c5b14e8bae069108184740f/src/g4esp.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "*"
      }
    })
        .then((data) => data.text())
        .then((profile) => setMe(profile))
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
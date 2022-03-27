import React, {useState, useEffect} from "react"

import Heading from "./components/Heading"
import Contacts from "./components/Contacts"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education  from "./components/Education"

export const G4ESP = () => {
  
  const [me, setMe] = useState()
  
  useEffect(() => {
    fetch('src/g4esp.json', {
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
        .then((data) => data.json())
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
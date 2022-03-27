import React from "react"

export default function Skills({skills:{langs, tools}}) {
  return (
    <>
      <h2>SKILLS <span>// Tech and tools I use in everyday work</span></h2>
      <ul className="langs">
        {langs.map((lang, i) => <li key={i}><h4>{`${lang}${(i === langs.length - 1) ? "" : ", "}`}</h4></li>)}
      </ul>
      <ul className="tools">
        {tools.map((tool, i) => <li key={i}><h4>{tool}{`${(i === tools.length - 1) ? "" : ", "}`}</h4></li>)}
      </ul>
    </>
  )
}
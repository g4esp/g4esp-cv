import React from "react"

export default function Experience({experience}) {
  return (
    <>
      <h2>EXPERIENCE <span>// Work recent history</span></h2>
        {experience.map(({position, company, dates, role}, i) => {
          return (
            <div key={i} className="exp">
              <h4>{position} <span>// {dates}</span></h4>
              <h5>{company}</h5>
              <p>{role}</p>
            </div>
          )
      })}
    </>
  )
}
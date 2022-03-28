import React from "react"

export default function Contacts ({contacts: {email, tel, linkedin, github}}) {
    return (
      <ul className="contacts">
        <li><a href={`mailto:${email}`}>{email}</a></li>
        <li><a href={`tel:${tel.split(' ').join('')}`}>{tel}</a></li>
        <li><a target="_blank" title="Linkedin" href={linkedin}>Linkedin</a></li>
        <li><a target="_blank" title="GitHub" href={github}>GitHub</a></li>
      </ul>
    )
  }
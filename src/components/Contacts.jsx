import React from "react"

export default function Contacts ({contacts: {email, tel, linkedin, github}}) {
    return (
      <ul className="contacts">
        <li><a href={`mailto:${email}`}>{email}</a></li>
        <li><a href={`tel:${tel.split(' ').join('')}`}>{tel}</a></li>
        <li><a href={linkedin}>Linkedin</a></li>
        <li><a href={github}>GitHub</a></li>
      </ul>
    )
  }
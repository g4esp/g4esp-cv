import React from "react"

export default function Education({education}) {
    return(
        <>
            <h2>EDUCATION <span>// Educational history</span></h2>
            <div className="edu">
                {education.map((course, i) => <h4 key={i}>{course}</h4>)}
            </div>
        </>
    )
}
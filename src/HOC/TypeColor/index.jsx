import React from "react"

export default function TypeColor({children}){
    switch (children){
        case "answered":
            return <span style={{color: "#62D9CD"}}>Answered</span>
        case "missed":
            return <span style={{color: "red"}}>Missed</span>
        case "voicemail":
            return <span style={{color: "#6482ED"}}>Voice Mail</span>
        default:
            return <span style={{color: "#6482ED"}}>{children}</span>
    }
}
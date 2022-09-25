import React from "react"
import { Button } from "react-bootstrap"

export default function StatusButton({children, apiCall, id}){
    switch (children){
        case "Archived":
            return <Button onClick={()=>apiCall(id)} style={{color: "#3DD0C1", backgroundColor:"#EDFBF9", border: "none"}}>{children}</Button>
        default:
            return <Button onClick={()=>apiCall(id)} style={{color: "#B1B1B1", backgroundColor: "#EEEEEE", border: "none"}}>{children}</Button>
    }
}
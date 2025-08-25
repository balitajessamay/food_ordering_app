"use client"

import React from "react"
import { useState } from "react"

interface OpenElementProps {
    elementStyle: string;
}

const OpenElement = (props: OpenElementProps) => {
    const [showElement, setShowElement] = useState<boolean>(false)
    
    const toggleElement = () => {
     setShowElement((prev) => !prev)
    }

    return (
    <button className={props.elementStyle} onClick={() => toggleElement()}>
        {showElement}
    </button>
  )
}

export default OpenElement
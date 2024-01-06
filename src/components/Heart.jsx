import React, { useState } from "react"

export default function Heart({nickname}) {
    const key = "1ndr.fave." + nickname
    const [isFave, setIsFave] = useState(!!JSON.parse(window.localStorage.getItem(key)))

    const toggleIsFave = () => {
        window.localStorage.setItem(key, JSON.stringify(!isFave))
        setIsFave(!isFave)
    }

    return <i
        onClick={() => toggleIsFave()}
        className={"fave fa-heart " + (isFave ? "fa-solid isFave" : "fa-thin")}
    />
}
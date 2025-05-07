"use client"

import { useEffect, useState } from "react"

export function Cursor() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return <span className={`inline-block w-2 h-4 bg-amber-500 ml-1 ${visible ? "opacity-100" : "opacity-0"}`}></span>
}

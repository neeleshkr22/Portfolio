"use client"

import React, { type ReactNode, useEffect, useState } from "react"

interface TerminalProps {
  children: ReactNode
  delay?: number
}

export function Terminal({ children, delay = 100 }: TerminalProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            className: `${(child as React.ReactElement).props.className || ""} terminal-item`,
            style: {
              animationDelay: `${index * delay}ms`,
            },
          })
        }
        return child
      })}
    </div>
  )
}

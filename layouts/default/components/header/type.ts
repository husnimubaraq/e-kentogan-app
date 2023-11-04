import React from "react"

export type TProps = {
    title: string,
    onBack?: () => void,
    rightComponent?: React.ReactElement
}
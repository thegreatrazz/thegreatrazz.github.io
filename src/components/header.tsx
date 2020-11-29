
import React from "react";

export interface HeaderProps {
    headerText: string
}

export default function Header(props: HeaderProps) {
    return <h1>{ props.headerText }</h1>
}

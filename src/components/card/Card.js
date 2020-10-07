import React from 'react'

export default function Card(props) {
    return (
        <p onClick = {props.onClick} className = {props.data}>{props.data}</p>
    )
}
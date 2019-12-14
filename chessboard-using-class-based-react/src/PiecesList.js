import React, { Component } from 'react'
import { getPieces } from "./PieceProvider";

export default class PiecesList extends Component {
    render() {
        const pieces = getPieces();
        return (
            <ul className="pieces-list">
                {
                    pieces.map((piece) => {
                        return <li key={piece.name}> {piece.name}</li>
                    })
                }
            </ul>
        )
    }
}

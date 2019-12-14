import React, { Component } from 'react'
import { getPieces } from "./PieceProvider";

export default class PiecesList extends Component {
    render() {
        const pieces = getPieces();
        return (
            <ul>
                {
                    pieces.map(function (piece) {
                        return <li> {piece.name}</li>
                    })
                }
            </ul>
        )
    }
}

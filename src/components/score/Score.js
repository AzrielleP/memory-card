import React from 'react';

export default function Score(props) {
    return (
        <div>
            <p>{props.scoreData}</p>
            <p>{props.bestScoreData}</p>
        </div>
    )
}
import React, { useEffect } from 'react'
import useInterval from '@use-it/interval';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Segment } from 'semantic-ui-react';


function CountdownTimer({ isCurrentPlayer, isCounting, countdown, endElimination, revealClues, countdownNum}) {
    useEffect(() => {
        if (isCurrentPlayer) {
            revealClues();
        }
    }, [revealClues, isCurrentPlayer])

    useInterval(() => {
        if (isCounting) {
            if (countdown === 0) {
                endElimination()
            } else {
                countdownNum(1);
            }
        }
    }, 1000);

    

    return(
            <Segment>
                <CircularProgressbar value={countdown} minValue={0} maxValue={30} text={`${countdown} s`} />
            </Segment>
    )
}

export default CountdownTimer
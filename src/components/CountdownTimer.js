import React from 'react'
import useInterval from '@use-it/interval';
import Clues from './Clues'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Segment } from 'semantic-ui-react';


function CountdownTimer(props) {
    // let [count, setCount] = useState(30);

    useInterval(() => {
        if (props.isCounting) {
            if (props.countdown === 0) {
                props.endElimination()
            }
            props.countdownNum(1);
        }
    }, 1000);

    useInterval(() => {
        if (props.isCurrentPlayer) {
            props.revealClues();
        }
    }, [])
    

    return(
            <Segment>
                <CircularProgressbar value={props.countdown} minValue={0} maxValue={30} text={`${props.countdown} s`} />
            </Segment>
    )
}

export default CountdownTimer
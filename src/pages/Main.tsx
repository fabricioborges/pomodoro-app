import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, TouchableOpacity, Vibration } from 'react-native';

import styles from './styles';

interface IClock {
    minutes: number,
    seconds: number
}

const Main: React.FC = () => {
    const minute = 60;
    const newClock: IClock = {
        minutes: 2,
        seconds: 0
    }
    const [clock, setClock] = useState<IClock>(newClock);
    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS
    ];

    useEffect(() => {
        setClock(newClock);
    }, [])


    const start = useCallback(() => {
        let seconds = clock.seconds;
        let minutes = clock.minutes;

        const timer = setInterval(() => {
            if (seconds === 0 && minutes > 0) {
                seconds = minute - 1;
                minutes = minutes - 1;
                setClock({ minutes, seconds });
            }
            else if (seconds > 0) {
                seconds = seconds - 1;
                minutes = minutes;
                setClock({ minutes, seconds });
            }
            else {
                clearInterval(timer);
                Vibration.vibrate(PATTERN)
                alert('deu boa')
            }
        }, 1000);
    }, [clock]);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>{clock?.minutes}</Text>
                <Text style={styles.dotText}>:</Text>
                <Text style={styles.text}>{clock?.seconds}</Text>
            </View>
            <TouchableOpacity onPress={start} style={styles.button}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Main;
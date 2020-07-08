import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, TouchableOpacity, Vibration, Alert } from 'react-native';

import styles from './styles';

interface IClock {
    minutes: number,
    seconds: number
}

const Main: React.FC = () => {
    const minute = 60;
    const newClock: IClock = {
        minutes: 25,
        seconds: 0
    }

    const pauseClock: IClock = {
        minutes: 5,
        seconds: 0
    }

    const longPauseClock: IClock = {
        minutes: 10,
        seconds: 0
    }

    const [clock, setClock] = useState<IClock>();
    const [buttonDisabled, setVisible] = useState<boolean>();
    const [timer, setTimer] = useState<number>();
    const [title, setTitle] = useState<string>();
    let count = 1;
    let pomodoro = false;
    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS
    ];

    useEffect(() => {
        setClock(newClock);
        setVisible(true);

    }, [])

    const start = () => {
        count = count + 1;
        pomodoro = false;
        setTitle('Pomodoro');
        countdown(newClock.minutes, newClock.seconds);
    }

    const countdown = useCallback((minutes: number, seconds: number) => {
        setVisible(false);

        const inteval = setInterval(() => {
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
                clearInterval(inteval);
                Vibration.vibrate(PATTERN)
                Alert.alert(
                    'Fim do período',
                    'Pressione "Ok" para o próximo período!',
                    [{ text: 'Ok', onPress: () => nextPeriod() }])
            }
        }, 1000);

        setTimer(inteval);

    }, []);

    const stop = () => {
        setVisible(true);
        clearInterval(timer);
    }

    const pause = () => {
        pomodoro = true;
        setTitle('Pausa');

        setClock(pauseClock);

        countdown(pauseClock.minutes, pauseClock.seconds);
    }

    const nextPeriod = () => {
        if (count === 4) {
            longPause();
            return;
        }
        pomodoro ? start() : pause();
    }
    const longPause = () => {
        count = 0;
        pomodoro = true;
        setTitle('Pausa longa');

        setClock(longPauseClock);

        countdown(longPauseClock.minutes, longPauseClock.seconds);
    }

    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.container}>
                <Text style={styles.clock}>{clock?.minutes}</Text>
                <Text style={styles.dotText}>:</Text>
                <Text style={styles.clock}>{clock?.seconds}</Text>
            </View>
            {buttonDisabled === true ?
                <TouchableOpacity onPress={start} style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity> :
                <TouchableOpacity onPress={stop} style={styles.button}>
                    <Text style={styles.buttonText}>Parar</Text>
                </TouchableOpacity>}
        </View>
    )
}

export default Main;
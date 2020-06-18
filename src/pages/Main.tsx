import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Vibration } from 'react-native';

import styles from './styles';

interface IClock {
    minutes: number,
    seconds: number
}

const Main: React.FC = () => {
    var newClock: IClock = {
        minutes: 25,
        seconds: 0
    }
    const [clock, setClock] = useState<IClock>({ minutes: 2, seconds: 0 });


    const start = () => {

        let seconds = 60;
        let minutes = 2;
        const timer = setInterval(() => {

           // console.log(seconds);
            // setClock({minutes: 25, seconds});
            if (clock.minutes == 0 && clock.seconds === 0) {
                clearTimeout(timer);
            }

            if (seconds > 0) {
                seconds = seconds - 1;
                minutes = clock.minutes - 1;

                setClock({ minutes, seconds });
            }
            else {
                seconds = 60;
                seconds = seconds - 1;
                minutes = clock.minutes--;

                setClock({ minutes, seconds });
            }
        }, 100);
        //   setClock({ minutes: 25, seconds: 0 });



        //  console.log(clock)
        // if (clock) {

        //     setInterval(() => {
        //         if (clock.minutes > 0 || clock.seconds > 0) {
        //             //     alert('primeiro if' + clock.seconds);
        //             if (clock.minutes === 0 && clock.seconds === 0) {
        //                 clearTimeout();
        //                 alert('teste else if' + clock.seconds);
        //                 Vibration.vibrate([100, 200, 300, 30000], true);
        //                 return null;
        //             }


        //             else {
        //                 let minutes = clock.minutes;
        //                 let seconds = clock.seconds - 1;
        //                 setClock({minutes, seconds});
        //                 // alert(clock.minutes);     
        //                 //return null;
        //             }
        //         }
        //     }, 2000);
        // }
    }



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
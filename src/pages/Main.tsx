import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

import styles from './styles';

const Main: React.FC = () => {    
    const [duration, setDuration] = useState<moment.Duration>();
   
    useEffect(() => {
        const timeInitial = moment();
        let minutes = 25;
        let seconds = 0;
        let hours = 0;
        timeInitial.add(seconds, 'seconds').add(minutes, 'minutes').add(hours, 'hours');

        const currentTime = moment();

        let diffTime = timeInitial.unix() - currentTime.unix();
        setDuration(moment.duration(diffTime * 1000, 'milliseconds'));
        alert(duration?.asSeconds());        
    }, [])

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>{duration?.asMinutes()}</Text>
                <Text style={styles.dotText}>:</Text>
                <Text style={styles.text}>00</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
        </View> 
    )
}

export default Main;
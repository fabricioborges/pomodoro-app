import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    text: {
        height: 76,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 15,        
        width: 100,
        fontSize: 45
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        marginHorizontal: 65,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    dotText: {
        fontSize: 45,
        marginTop: 20
    }
});

export default styles;
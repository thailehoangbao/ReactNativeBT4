import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    title: {
        color: '#0398fc',
        fontSize:24,
        fontWeight: 'bold'
    },
    icons: {
        width: 40,
        height: 40
    },
    btn: {
        width: 48,
        height: 48,
        backgroundColor: '#e378da',
        borderRadius: 8,
        padding:4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    p16: {
        padding:16
    },
    mt8: {
        marginTop:8
    },
    mt16: {
        marginTop:16
    },
    ml24: {
        marginLeft:24
    },
    bgLightGray: {
        backgroundColor: 'gray'
    },
    //NearBy
    containerItems: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center',
        width: 360,
    },
    bgItems: {
        backgroundColor: 'white',
        width:360,
        borderRadius:8,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: '#999',
        borderWidth: 1,
        height: 50
    }
})
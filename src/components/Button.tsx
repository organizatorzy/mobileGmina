import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native'

interface ButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({title, onPress, disabled}) => (
    <Pressable  style={styles.button} onPress={onPress} disabled={disabled} >
        <Text style={styles.text}>{title}</Text>
    </Pressable>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5DB075',
        paddingVertical: 10,
        width: '80%',
        borderRadius: 15,
        marginVertical: 10,

    },
    text: {
        color: 'white',
        fontSize: 16,
        width: '100%',
        textAlign: 'center',
    }
});

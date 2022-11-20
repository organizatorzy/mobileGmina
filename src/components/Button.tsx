import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native'

interface ButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    color?: string
}

export const Button: React.FC<ButtonProps> = ({title, onPress, disabled, color='#5DB075'}) => (
    <Pressable  style={{...styles.button, backgroundColor: color}} onPress={onPress} disabled={disabled} >
        <Text style={styles.text}>{title}</Text>
    </Pressable>
)

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
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

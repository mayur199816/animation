import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useEffect } from 'react'

const Ball = () => {
    let position = new Animated.ValueXY(0,0);
    useEffect(() => {
        Animated.spring(position, {
            toValue: { x: 200, y: 500},
            useNativeDriver: false
        }).start()
    }, [])
  return (
    <Animated.View style={position.getLayout()}>
    <View style={styles.ball} />
    </Animated.View>
  )
}

export default Ball

const styles = StyleSheet.create({
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
})
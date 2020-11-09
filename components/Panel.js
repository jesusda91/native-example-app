import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Panel = ({ onPressLeft, textLeft }) => {
	return (
		<View style={styles.panel}>
			<Button onPress={onPressLeft} title={textLeft} />
			<Button title="Mostrar/Ocultar" />
		</View>
	)
}

export default Panel;

const styles = StyleSheet.create({
	panel: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

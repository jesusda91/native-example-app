import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Panel = () => {
	return (
		<View style={styles.panel}>
			<Button title="Lista" />
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

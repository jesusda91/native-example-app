import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

const Map = ({ handleLongPress }) => {
	return (
		<MapView
			style={styles.map}
			onLongPress={handleLongPress}
		/>
	)
}

export default Map

const styles = StyleSheet.create({
	map: {
		height: Dimensions.get("window").height - 150,
		width: Dimensions.get("window").width
	},
})

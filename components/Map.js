import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const Map = ({ handleLongPress, points, pointsFilter }) => {
	return (
		<MapView
			style={styles.map}
			onLongPress={handleLongPress}
		>
			{
				pointsFilter && points.map(({coordinate, name })=>(
					<Marker
						key={name}
						coordinate={coordinate}
						title={name}
					/>
				))
			}
		</MapView>
	)
}

export default Map

const styles = StyleSheet.create({
	map: {
		height: Dimensions.get("window").height - 150,
		width: Dimensions.get("window").width
	},
})

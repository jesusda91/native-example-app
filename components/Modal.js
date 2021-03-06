import React from 'react'
import { StyleSheet, Text, View, Modal, Dimensions  } from 'react-native'

export default ({ children, visibility }) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visibility}
		>
			<View style={styles.center}>
				<View style={styles.modalView}>
					{children}
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.4)'
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalView: {
		backgroundColor: '#FFF',
		borderRadius: 4,
		shadowColor: '#000',
		minWidth: Dimensions.get("window").width/3*2,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
})

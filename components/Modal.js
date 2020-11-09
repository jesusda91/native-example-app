import React from 'react'
import { StyleSheet, Text, View, Modal  } from 'react-native'

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
		justifyContent: 'center'
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
		padding: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
})

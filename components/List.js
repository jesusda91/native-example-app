import React from 'react'
import { Button, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

const List = ({ points, closeModal }) => {

	const data = points.map(x => x.name);

	return (
		<>
			<View style={styles.listContainer}>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<View style={styles.item}>
							<Text>{item}</Text>
						</View>
					)}
					keyExtractor={item => item}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button title="Cerrar" onPress={closeModal} />
			</View>
		</>
	)
}

export default List

const styles = StyleSheet.create({
	buttonContainer: {
		padding: 15,
	},
	item: {
		borderBottomWidth: 1,
		borderColor: "#ddd",
		height: 50,
		justifyContent: "center",
		padding: 15,
	},
	listContainer: {
		height: Dimensions.get("window").height - 300,
	},
})

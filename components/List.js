import React from 'react'
import { Button, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

const List = ({ points }) => {

	const data = points.map(x => x.name);

	return (
		<>
			<View style={styles.listContainer}>
				<FlatList
					data={data}
					renderItem={({ item }) => <Text>{item}</Text>}
					keyExtractor={item => item}
				/>
			</View>
			<View>
				<Button title="Cerrar" />
			</View>
		</>
	)
}

export default List

const styles = StyleSheet.create({
	listContainer: {
		height: Dimensions.get("window").height - 300,
	}
})

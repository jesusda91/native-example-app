import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';
import Map from './components/Map';
import Modal from './components/Modal';
import Panel from './components/Panel';
import List from './components/List';

export default function App() {

	const [points, setPoints] = useState([]);
	const [name, setName] = useState('');
	const [tempPoint, setTempPoint] = useState({});
	const [visibility, setVisibility] = useState(false);
	const [visibilityFilter, setVisibilityFilter] = useState('new_point');

	const handleChangeText = text => {
		setName(text);
	}

	const handleLongPress = ({ nativeEvent }) => {
		setVisibilityFilter('new_point');
		setVisibility(true);
		setTempPoint(nativeEvent.coordinate);
	};

	const handleSubmit = () => {
		const newPoint = { coordinate: tempPoint, name: name };
		setPoints(points.concat(newPoint));
		setVisibility(false);
		setName("");
	}

	const handleListPress = () => {
		setVisibilityFilter('all_points');
		setVisibility(true);
	}

	console.log(points)
	return (
		<View style={styles.container}>
			<Map handleLongPress={handleLongPress} />
			<Panel
				onPressLeft={handleListPress}
				textLeft="Lista"
			/>
			<Modal visibility={visibility}>
				{
					visibilityFilter === 'new_point' ? (
						<>
						<Input
							title="Nombre"
							placeholder="Nombre del punto"
							onChangeText={handleChangeText}
						/>
						<Button
							title="Aceptar"
							onPress={handleSubmit}
						/>
						</>
					) :
					<List
						points={points}
					/>
				}
			</Modal>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});

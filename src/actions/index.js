export function getMarkers(device) {
	return {
		type: 'GET_MARKERS',
		payload: device
	}
}
export function toggleMarkers(device) {
	return {
		type: 'TOGGLE_MARKERS',
		payload: device
	}
}


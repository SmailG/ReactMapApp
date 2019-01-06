import { markers } from '../api';

export function getMarkers(device) {
	const res = markers.list();

	return {
		type: 'GET_MARKERS',
		payload: res
	}
}
export function toggleMarkers(device) {
	return {
		type: 'TOGGLE_MARKERS',
		payload: device
	}
}


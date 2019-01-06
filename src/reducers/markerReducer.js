const initalState = {
	request: { pending: false, error: false, fulfilled: false },
	markersData: [
		{ id: 1, lat: 18.34244, lon: 43.84864, alias: 'marker1', category: 'standard' },
		{ id: 2, lat: 18.32244, lon: 43.84164, alias: 'marker2', category: 'standard' },
		{ id: 3, lat: 18.34244, lon: 43.86864, alias: 'marker3', category: 'optional' },
		{ id: 4, lat: 18.34244, lon: 43.81864, alias: 'marker4', category: 'optional' },
	],
	showMarkers: true
};

export default function reducer (state = initalState, action) {
	switch (action.type) {
		case 'GET_MARKERS_PENDING':
			return {
				...state,
				request: { ...state.request, pending: true, error: false, fulfilled: false }
			};
		case 'GET_MARKERS_REJECTED':
			return {
				...state,
				request: { ...state.request, pending: false, error: true, fulfilled: false }
			};
		case 'GET_MARKERS_FULFILLED':
			return {
				...state,
				request: { ...state.request, pending: false, error: false, fulfilled: true },
				markersData: action.payload
			}
		case 'TOGGLE_MARKERS':
			return {
				...state,
				showMarkers: !state.showMarkers
			}
		default:
			return state;
	}
}


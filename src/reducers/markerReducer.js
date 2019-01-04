const initalState = {
	request: { pending: false, error: false, fulfilled: false },
	markers: [
		{id: 1, lat: 0, lon: 0, alias: ''}
	]
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
			}
		default:
			return state;
	}
}


import React from 'react';

export const PCContext = React.createContext({
	pokemon: [],
	toggleCaptured: () => {}
});

export default PCContext;
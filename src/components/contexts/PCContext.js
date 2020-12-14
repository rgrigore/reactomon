import React from 'react';

export const PCContext = React.createContext({
	capturedPKM: [],
	toggleCaptured: () => {}
});

export default PCContext;
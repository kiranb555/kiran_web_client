import { useState, useEffect, createContext, useContext } from 'react';

const viewportContext = createContext({});

export const ViewPortProvider = ({ children }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};
	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return (
		<viewportContext.Provider value={{ width, height }}>
			{children}
		</viewportContext.Provider>
	);
};

export const useViewPort = () => {
	const { width, height } = useContext(viewportContext);
	const isLargeScreen = width > 600;
	return { width, height, isLargeScreen };
};

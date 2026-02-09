import React from 'react';

interface SpaceBoxProps {
	height: string;
}

export const SpaceBox: React.FC<SpaceBoxProps> = ({ height }) => {
	return <div style={{ height: height }}></div>;
};

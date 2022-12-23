import React from 'react';


export interface ButtonProps {
	children: React.ReactNode|string;
	className?: string
	onClick: () => void
}
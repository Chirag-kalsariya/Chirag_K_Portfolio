import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from '../svg';

interface IconBoxProps {
	iconComponent: React.ReactNode;
	iconLabel: string;
	cardLink: string;
	showArrow?: boolean;
}

export const IconBox: React.FC<IconBoxProps> = ({ iconComponent, iconLabel, cardLink, showArrow = false }) => {
	return (
		<Link href={cardLink} target="_blank" rel="noopener noreferrer">
			<Card className="hover:border-primary/50 group h-full w-full cursor-pointer py-3 transition-colors">
				<CardContent className="flex items-center gap-4 px-3 text-lg font-medium">
					<div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden">{iconComponent}</div>
					<span className="group-hover:text-link flex items-center gap-1 transition-colors">
						{iconLabel} {showArrow && <ArrowUpRight className="h-4 w-4" />}
					</span>
				</CardContent>
			</Card>
		</Link>
	);
};

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "../svg";

interface IconBoxProps {
    iconComponent: React.ReactNode;
    iconLabel: string;
    cardLink: string;
    showArrow?: boolean;
}

export const IconBox: React.FC<IconBoxProps> = ({ iconComponent, iconLabel, cardLink, showArrow = false }) => {
    return (
        <Link href={cardLink} target="_blank" rel="noopener noreferrer">
            <Card className="w-full h-full cursor-pointer transition-colors hover:border-primary/50 group py-3">
                <CardContent className="flex items-center gap-4 text-lg font-medium px-3">
                    <div className="w-7 h-7 flex items-center justify-center overflow-hidden shrink-0">
                        {iconComponent}
                    </div>
                    <span className="group-hover:text-link transition-colors flex items-center gap-1">
                        {iconLabel} {showArrow && <ArrowUpRight className="w-6 h-6" />}
                    </span>
                </CardContent>
            </Card>
        </Link>
    );
};
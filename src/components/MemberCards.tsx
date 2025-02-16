// components/MemberCards.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MemberCardProps {
    member: {
        name: string;
        designation: string;
        image: string;
        year?: string;
        team?: string;
        linkedin?: string;
    };
    showHoverDetails?: boolean;
}

const MemberCards: React.FC<MemberCardProps> = ({ member, showHoverDetails = true }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = `relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-cover bg-center h-[350px]`;
    const textOverlayStyle = `absolute inset-x-0 bottom-0 p-4 text-white bg-gradient-to-t from-black to-transparent`;
    const hoverOverlayStyle = `absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-4`;

    const renderCardContent = () => (
        <div className={`${textOverlayStyle} ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}> {/* Added conditional opacity */}
            <div>
                <h3 className="text-base font-semibold mb-1">{member.name}</h3>
                <p className="text-sm">{member.designation}</p>
            </div>
        </div>
    );

    const renderHoverOverlay = () => (
        <div className={hoverOverlayStyle}>
            <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
            {member.year && <p className="text-sm mb-1">Year: {member.year}</p>}
            {member.team && <p className="text-sm mb-1">Team: {member.team}</p>}
            <p className="text-sm">Designation: {member.designation}</p>
        </div>
    );

    const cardContent = (
        <div
            className={cardStyle}
            style={{ backgroundImage: `url(${member.image})` }}
        >
            {!isHovered && renderCardContent()} {/* Conditionally render card content when not hovered */}
            {showHoverDetails && isHovered && renderHoverOverlay()}
        </div>
    );

    if (member.linkedin) {
        return (
            <Link href={member.linkedin} className="block" target="_blank" rel="noopener noreferrer">
                <div
                    className={cardStyle}
                    style={{ backgroundImage: `url(${member.image})` }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                     {!isHovered && renderCardContent()} {/* Conditionally render card content when not hovered */}
                    {showHoverDetails && isHovered && renderHoverOverlay()}
                </div>
            </Link>
        );
    }

    return (
        <div
            className={cardStyle}
            style={{ backgroundImage: `url(${member.image})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
             {!isHovered && renderCardContent()} {/* Conditionally render card content when not hovered */}
            {showHoverDetails && isHovered && renderHoverOverlay()}
        </div>
    );
};

export { MemberCards };
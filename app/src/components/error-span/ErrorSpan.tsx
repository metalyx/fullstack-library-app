import React from 'react';

interface iErrorSpan {
    children?: React.ReactNode;
    isVisible?: boolean;
    className?: string;
}

const ErrorSpan: React.FC<iErrorSpan> = ({
    children,
    isVisible = true,
    className = '',
}) => {
    if (isVisible) {
        return (
            <span className={`font-bold text-red-600 ${className}`}>
                {children}
            </span>
        );
    } else {
        return <></>;
    }
};

export default ErrorSpan;

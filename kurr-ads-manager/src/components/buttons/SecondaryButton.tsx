import React from "react";

interface SecondaryButtonProps {
    title: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({title}) => {
    const handleClick = () => {
        console.log('Button clicked');
    }

    return (
        <button style={buttonStyle} onClick={handleClick}>
            {title}
        </button>
    );
};

export default SecondaryButton;

const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#fff',
    border: '0px',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'underline',
};

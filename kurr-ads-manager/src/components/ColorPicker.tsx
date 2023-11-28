import React, {useState} from 'react';
import { ChromePicker } from "react-color";
import PrimaryButton from './buttons/PrimaryButton';

const ColorPicker: React.FC = () => {
    const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);

    const handleClick = () => {
        setDisplayColorPicker((prevDisplay) => !prevDisplay);
    };

    const handleClose = () => {
        setDisplayColorPicker(false);
    };

    const popover: React.CSSProperties = {
        position: 'absolute',
        zIndex: 2,
    };

    const cover: React.CSSProperties = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    }

    return (
        <div>
            <PrimaryButton onClick={handleClick} disabled={false} title='Välj färg'/>
            {displayColorPicker ? (
                <div style={popover}>
                    <div style={cover} onClick={handleClose}/>
                    <ChromePicker/>
                </div>
            ) : null}
        </div>
    );
}
export default ColorPicker;

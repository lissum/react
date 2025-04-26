import { useState } from 'react';
import { hexToRgb, expandShortHex } from '../utils.js';

export const ColorConverter = () => {
    const [hexInput, setHexInput]               = useState( '' );
    const [rgbOutput, setRgbOutput]             = useState( '' );
    const [error, setError]                     = useState( false );
    const [backgroundColor, setBackgroundColor] = useState( '#2c3e50' );

    const handleInputChange = ( e ) => {
        const value = e.target.value;
        setHexInput( value );

        if ( value.length === 4 || value.length === 7 ) {
            const expandedHex = value.length === 4 ? expandShortHex( value ) : value;
            const rgb         = hexToRgb( expandedHex );

            if ( rgb ) {
                setRgbOutput( rgb );
                setBackgroundColor( expandedHex );
                setError( false );
            }
            else {
                setRgbOutput( '' );
                setBackgroundColor( '#d6583f' );
                setError( true );
            }
        }
        else {
            setRgbOutput( '' );
            setBackgroundColor( '#2c3e50' );
            setError( false );
        }
    };

    return (
        <div style={{backgroundColor}} className={`color-validator` + ( error ? ' error' : '' )}>
            <div className="container">
                <input
                    type="text"
                    value={hexInput}
                    onChange={handleInputChange}
                    placeholder="#000000 or #000"
                    maxLength="7"
                    className="hex-input"
                />
                {error ? (
                    <p className="error-text">Ошибка</p>
                ) : rgbOutput ? (
                    <p className="rgb-text">{rgbOutput}</p>
                ) : null}
            </div>
        </div>
    );
};
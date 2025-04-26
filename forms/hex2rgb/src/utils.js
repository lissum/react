export const expandShortHex = ( hex ) => {
    if ( hex.length === 4 ) {
        return `#${hex[ 1 ]}${hex[ 1 ]}${hex[ 2 ]}${hex[ 2 ]}${hex[ 3 ]}${hex[ 3 ]}`;
    }
    return hex;
};

export const hexToRgb = ( hex ) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );

    if ( ! result ) {
        return null;
    }

    const r = parseInt( result[ 1 ], 16 );
    const g = parseInt( result[ 2 ], 16 );
    const b = parseInt( result[ 3 ], 16 );

    return `rgb(${r}, ${g}, ${b})`;
};
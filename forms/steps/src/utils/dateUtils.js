export const parseDate = ( dateStr ) => {
    const [year, month, day] = dateStr.split( '-' ).map( Number );
    return new Date( year, month - 1, day );
};

export const formatDate = ( dateStr ) => {
    const date = parseDate( dateStr );
    return date.toLocaleDateString( 'ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    } );
};
import React from 'react';

/**
 * Компонент NewsItem отображает одну новость с заголовком и источником.
 * @param {Object} props
 * @param {string} props.title - Заголовок новости
 * @param {string} props.source - Источник новости
 */
const NewsItem = ( {title, source} ) => (
    <div style={{borderBottom: '1px solid #ccc', padding: '5px 0'}}>
        <p>{title}</p>
        <small>{source}</small>
    </div>
);

export default NewsItem;
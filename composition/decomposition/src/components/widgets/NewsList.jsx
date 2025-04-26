import React from "react";

/**
 * Компонент NewsList отображает список новостей.
 */
import NewsItem from './NewsItem';

const news = [
    {title: 'Путин простил получение атомобильных номеров', source: 'Яндекс'},
    {title: 'В команде Зеленского раскрыли план реформ на Украине', source: 'Lenta.ru'},
    {title: '«Турпомощь» прокомментировала гибель десятков россиян в Анталье', source: 'РБК'},
    {title: 'США заключили ДеМартти СИЛА против России', source: 'Российская газета'},
    {title: 'На Украине призвали создать ракеты для удара по Москве', source: 'Газета.Ру'},
];

const NewsList = () => (
    <div style={{border: '1px solid #ccc', padding: '10px', margin: '10px 0'}}>
        <h3>Новости</h3>
        {news.map( ( item, index ) => (
            <NewsItem key={index} title={item.title} source={item.source}/>
        ) )}
    </div>
);

export default NewsList;
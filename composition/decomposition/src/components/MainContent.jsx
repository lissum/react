import React from 'react';

/**
 * Компонент MainContent содержит основные блоки контента: погода, карта, эфир, телепрограмма и новости.
 */
import Weather from './widgets/Weather';
import Map from './widgets/Map';
import Broadcast from './widgets/Broadcast';
import TVProgram from './widgets/TVProgram';
import NewsList from './widgets/NewsList';

const MainContent = () => (
    <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
        <div style={{flex: '1', minWidth: '200px'}}>
            <Weather/>
            <Map/>
        </div>
        <div style={{flex: '1', minWidth: '200px'}}>
            <Broadcast/>
            <TVProgram/>
        </div>
        <div style={{flex: '1', minWidth: '200px'}}>
            <NewsList/>
        </div>
    </div>
);

export default MainContent;
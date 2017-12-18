import React from 'react';
import { Card } from 'semantic-ui-react';

import ImageCard from './ImageCard';

// Props: { itemsPerRow: 3,
//          cards: [ { imageName: 'tuna', title: 'Snack', icons: ['mini-protein'],
//              items: ['Cherry tomatoes', 'Tuna pouch with mustard'] } ]
export default class CardGrid extends React.PureComponent {
    render() {
        return (
            <Card.Group className='mealPlanCardGrid'>
                {this.props.cards.map((card, index) => {
                        return <ImageCard key={index} imageName={card.imageName} title={card.title}
                                    icons={card.icons} description={card.items.join(', ')} />;
                    }
                )}
            </Card.Group>
        );
    }
}
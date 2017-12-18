import React from 'react';
import { Card } from 'semantic-ui-react';

import ModalImageCard from './ModalImageCard';

// Props: { itemsPerRow: 3,
//          cards: [ { imageName: 'WLSTuna', directions: ['Step 1','Step 2', 'Step 3', 'Step 4'],
//              ingredients: ['5 oz ahi tuna steak', '1/2 fresh lime', '1 clove garlic'],
//              title: 'Seared Tuna Steaks', description: '1 serving', credit: 'WLS Daily Plate' } ]
export default class ModalCardGrid extends React.PureComponent {
    render() {
        return (
            <Card.Group className='nutritionCardGrid'>
                {this.props.cards.map((card, index) => {
                        return <ModalImageCard key={index} imageName={card.imageName} title={card.title} directions={card.directions}
                                    ingredients={card.ingredients} description={card.description} credit={card.credit} />;
                    }
                )}
            </Card.Group>
        );
    }
}
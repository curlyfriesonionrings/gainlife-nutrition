import React from 'react';
import { Image, Card, Icon } from 'semantic-ui-react';

// Props: {
//  imageName: 'tuna', title: 'Snack', icons: ['mini-protein', 'mini-fat'],
//  description: 'Cherry tomatoes, Tuna pouch with mustard' }
export default class ImageCard extends React.PureComponent {
    render() {
        const props = this.props;

        return (
            <Card raised className='mealPlanCard'>
                <Image src={props.imageName} />
                <Card.Content>
                    {props.icons.map((icon, index) => { return <Icon key={index} className='right floated' name={icon} />; })}
                    <Card.Header>{props.title}</Card.Header>
                    <Card.Description>{props.description}</Card.Description>
                </Card.Content>
            </Card>
        );
    }
}
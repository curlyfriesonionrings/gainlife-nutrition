import React from 'react';
import { Modal, Card, Image } from 'semantic-ui-react';
import RecipeModal from './RecipeModal';

import '../../scss/Nutrition.scss';

export default class ModalImageCard extends React.PureComponent {
    render() {
        const props = this.props;

        return (
            <Modal
                trigger={
                    <Card raised className='nutritionCard'>
                        <Image src={props.imageName} />
                        <Card.Content>
                            <Card.Header as='h4' className='truncated'>{props.title}</Card.Header>
                            <Card.Description>{props.description}</Card.Description>
                        </Card.Content>
                    </Card>
                }
                closeIcon dimmer='blurring'>
                <RecipeModal imageName={props.imageName} title={props.title} ingredients={props.ingredients}
                    directions={props.directions} credit={props.credit} />
            </Modal>
        );
    }
}
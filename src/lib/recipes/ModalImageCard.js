import React from 'react'
import { Modal, Container, Card, Grid, Image, Header, List } from 'semantic-ui-react'

import '../components/Nutrition.scss';

export default class ModalImageCard extends React.PureComponent {
    render() {
        const props = this.props;
        const ingredients2 = props.ingredients.splice(0, Math.ceil(props.ingredients.length / 2));

        return (
            <Modal
                trigger={
                    <Card raised className='nutritionCard'>
                        <Image src={props.imageName} />
                        <Card.Content>
                            <Card.Header as='h4'>{props.title}</Card.Header>
                            <Card.Description>{props.description}</Card.Description>
                        </Card.Content>
                    </Card>
                }
                closeIcon
                dimmer='blurring'>
                <Container className='nutritionModal'>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src={props.imageName} />
                                <Header as='h3'>{props.title}</Header>
                                <span className='nutritionModalSubheader'>INGREDIENTS</span>
                                <Grid>
                                    <Grid.Row className='nutritionIngredients'>
                                        <Grid.Column width={8}>
                                            <List bulleted>
                                                {props.ingredients.map((ingredient, index) => {
                                                    return <List.Item key={index}><span className='nutritionIngredient'>{ingredient}</span></List.Item>
                                                })}
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <List bulleted>
                                                {ingredients2.map((ingredient, index) => {
                                                    return <List.Item key={index}><span className='nutritionIngredient'>{ingredient}</span></List.Item>
                                                })}
                                            </List>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column className='nutritionDirections'>
                                <span className='nutritionModalSubheader'>DIRECTIONS</span>
                                <List ordered className='nutritionDirectionStep'>
                                    {props.directions.map((step, index) => { return <List.Item key={index}>{step}</List.Item> })}
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column />
                            <Grid.Column>Credit: {props.credit}</Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Modal>
        );
    }
}
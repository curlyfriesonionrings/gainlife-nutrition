import React from 'react';
import { Container, Grid, Image, Header, List } from 'semantic-ui-react'

export default class RecipeModal extends React.PureComponent {
    render() {
        const {imageName, title, ingredients, directions, credit } = this.props;
        const ingredients2 = ingredients.splice(0, Math.ceil(ingredients.length / 2));
        
        return (
            <Container className='nutritionModal'>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image src={imageName} />
                            <Header as='h3' className='nutritionRecipeTitle'>{title}</Header>
                            <span className='nutritionModalSubheader'>INGREDIENTS</span>
                            <Grid>
                                <Grid.Row className='nutritionIngredients'>
                                    <Grid.Column width={8}>
                                        <List bulleted>
                                            {ingredients.map((ingredient, index) => {
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
                                {directions.map((step, index) => { return <List.Item key={index}>{step}</List.Item> })}
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column />
                        <Grid.Column>Credit: {credit}</Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
import React from 'react';
import { Container, Grid, Button, Header, Icon, Divider } from 'semantic-ui-react';

import CardGrid from './CardGrid';

import '../../scss/Nutrition.scss';

export default class MealPlan extends React.Component {
  constructor(props) {
    super(props)

    this.state = { currentDay: 0 }
  }

  render() {
    const { mealPlan } = this.props;
    const { currentDay } = this.state;
    const iconKey = [
      { icon: 'mini-protein', label: 'Protein' },
      { icon: 'mini-carbs', label: 'Carbohydrate' },
      { icon: 'mini-fat', label: 'Fat' }
    ];

    return (
      <Container>
        <Grid columns={mealPlan.length}>
          {mealPlan.map((dayItem, index) => {
            return (
              <Grid.Column key={index}>
                <Button className='mealPlanButton' content={'Day ' + (index + 1)} active={currentDay === index} onClick={() => this.setState({currentDay: index})} />
              </Grid.Column>
            );
          })}
        </Grid>
        <Header as='h3' className='mealPlanDay'>Day {currentDay + 1}</Header>
        <Header floated='right' size='tiny' className='mealPlanKey'>
          {iconKey.map((entry, index) => {
            return <span key={index} className='mealPlanKeyItem'><Icon name={entry.icon} />{entry.label}</span>;
          })}
        </Header>
        <Divider className='mealPlanDivider'/>
        <CardGrid cards={mealPlan[currentDay].dayItems} />
      </Container>
    );
  }
}
import _ from 'lodash';
import React from 'react';
import { Grid, Header, Search, Divider } from 'semantic-ui-react';

import ModalCardGrid from './ModalCardGrid';

export default class Recipes extends React.Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.recipes, isMatch),
      })
    }, 500)
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            <Header as='h3' className='nutritionRecipeLabel'>Recipes</Header>
          </Grid.Column>
          <Grid.Column width={5}>
            <Search
              fluid
              className='nutritionSearch'
              loading={this.state.isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={this.handleSearchChange}
              results={this.state.results}
              value={this.state.value}
              placeholder='Search recipe...'
              />
          </Grid.Column>
        </Grid.Row>
        <Divider className='nutritionRecipeDivider'/>
        <Grid.Row>
          <ModalCardGrid cards={this.props.recipes} />
        </Grid.Row>
      </Grid>
    );
  }
}
import _ from 'lodash';
import React from 'react';
import { Grid, Header, Search, Divider, Modal } from 'semantic-ui-react';

import ModalCardGrid from './ModalCardGrid';
import RecipeModal from './RecipeModal';

export default class Recipes extends React.Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: this.props.recipes, value: '', result: {}, modalOpen: false })

  handleResultSelect = (e, { result }) => {
    this.setState({ result: result, modalOpen: true })
  }

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

  closeModal = () => this.setState({ modalOpen: false })

  render() {
    return (
      <div>
        <Modal open={this.state.modalOpen} onClose={this.closeModal} closeIcon dimmer='blurring'>
          <RecipeModal imageName={this.state.result.imageName} title={this.state.result.title} ingredients={this.state.result.ingredients}
            directions={this.state.result.directions} credit={this.state.result.credit} />
        </Modal>
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
            <ModalCardGrid cards={this.state.results} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
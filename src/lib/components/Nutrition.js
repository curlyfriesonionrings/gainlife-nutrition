import React from 'react';

import Instructional from '../instructional/Instructional';
import TabMenu from '../menu/TabMenu';
import FoodList from '../foodlist/FoodList';
import MealPlan from '../mealplan/MealPlan';
import Recipes from '../recipes/Recipes';

export default class Nutrition extends React.Component {
    render() {
        const phaseData = this.props.phaseData;

        const menuItems = [
            { label: 'My Foodlist', content: <FoodList planUri={phaseData.planUri} /> },
            { label: 'Recipes', content: <Recipes recipes={phaseData.recipes}/> },
            { label: 'Sample Meal Plan', content: <MealPlan mealPlan={phaseData.mealPlan} /> }
          ]

        return (
            <div>
                <Instructional iconName={phaseData.iconName} title={phaseData.title}
                    welcomeText={phaseData.welcomeText} planVideoUri={phaseData.planVideoUri}
                    imgUri='http://via.placeholder.com/500x300'/>
                <TabMenu menuItems={menuItems}/>
            </div>
        )
    }
}
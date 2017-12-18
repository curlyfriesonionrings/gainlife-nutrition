import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

import '../../scss/Nutrition.scss';

// Props: [{ menutitle: Component }]
export default class TabMenu extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = { activeIndex: 0 }
    }
    
    labelDisplay = (active, label) => { return active ? label.toUpperCase() : label }

    render() {
        const props = this.props;
        const { activeIndex } = this.state;

        return (
            <Container>
                <Menu className='nutritionTabMenu' pointing secondary widths={props.menuItems.length > 16 ? 16 : props.menuItems.length}>
                {
                    props.menuItems.map((item, index) => {
                        return (
                            <Menu.Item key={index} name={item.label} active={index === activeIndex}
                                onClick={() => this.setState({activeIndex: index})}
                                content={this.labelDisplay(index === activeIndex, item.label)} />
                        );
                    })
                }
                </Menu>

                {props.menuItems[activeIndex].content}
            </Container>
        );
    }
}
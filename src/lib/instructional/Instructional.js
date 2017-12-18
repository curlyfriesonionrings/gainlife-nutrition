import React from 'react';
import { Icon, Modal, Embed } from 'semantic-ui-react';

import '../components/Nutrition.scss';

export default class Instructional extends React.PureComponent {
    render() {
        const { iconName, title, welcomeText, planVideoUri, imgUri } = this.props;

        const headerGroup = (
            <div className='nutritionBanner' style={{backgroundImage: "url(" + imgUri + ")"}}>
                <h1 className='light'><Icon name={iconName} color='red'/>{title}</h1>
                <div className='subheader'>{welcomeText}</div>
            </div>
        )

        return (
                <Modal trigger={headerGroup} closeIcon dimmer='blurring'>
                    <Embed url={planVideoUri} />
                </Modal>
        );
    }
}
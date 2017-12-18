import React from 'react';
import { Container } from 'semantic-ui-react';

import '../components/Nutrition.scss';

export default class FoodList extends React.PureComponent {
    render() {
        const { planUri } = this.props;

        return (
            <Container textAlign='center'>
                <Container className='downloadPdf'>
                    <a href={planUri}>Download PDF File</a>
                </Container>
                <object className='pdf' data={planUri} type='application/pdf'>
                    <embed src={planUri} type='application/pdf' />
                </object>
            </Container>
        );
    }
}
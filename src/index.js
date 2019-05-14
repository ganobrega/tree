import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Root = () => (
    <Fragment>
        <App/>
    </Fragment>
)

ReactDOM.render(<Root />, document.getElementById('root'));
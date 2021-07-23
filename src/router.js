import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Top from './screens/Top'
import MonsterIndex from './screens/MonsterIndex';

const Router = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Top} />
        </Switch>
    </BrowserRouter>
    );
}

export default Router;

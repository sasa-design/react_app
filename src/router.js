import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Top from './screens/Top';
import MonsterIndex from './screens/MonsterIndex';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Top /></Route>
                <Route exact path="/monster/index"><MonsterIndex /></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;

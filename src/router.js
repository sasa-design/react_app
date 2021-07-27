import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Top from './screens/Top';
import MonsterIndex from './screens/MonsterIndex';
import MonsterShow from './screens/MonsterShow';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Top /></Route>
                <Route exact path="/monster/index"><MonsterIndex /></Route>
                <Route exact path="/monster/show/:id"><MonsterShow /></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;

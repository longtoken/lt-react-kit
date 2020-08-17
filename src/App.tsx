import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./containers/Home/index'));
// const Test = lazy(() => import('./pages/Test/index'));
function App() {
    return (
        <HashRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/test" exact component={Test}></Route> */}
                </Switch>
            </Suspense>
        </HashRouter>
    );
}

export default App;

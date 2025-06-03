import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayerDetail from './components/PlayerDetail';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <h1>Baseball Stats App</h1>
                <Switch>
                    <Route path="/players/:playerId" component={PlayerDetail} />
                    {/* Additional routes can be added here */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
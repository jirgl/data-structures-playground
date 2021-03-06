import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { lightBlue500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { NotFound } from './notFound';
import { Header } from './components/header';
import { ArrayPlaygrounds } from './playgrounds/arrayPlaygrounds/arrayPlaygrounds';
import { ListPlaygrounds } from './playgrounds/listPlaygrounds/listPlaygrounds';
import { TreePlaygrounds } from './playgrounds/treePlaygrounds/treePlaygrounds';

const navigationItems = ['arrays', 'lists', 'trees', 'heaps'];
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: lightBlue500
    }
});

export interface AppProps { }

export class App extends React.Component<AppProps, undefined> {
    render() {
        return <MuiThemeProvider muiTheme={muiTheme}>
            <BrowserRouter>
                <div>
                    <Header title='Data Structures Playground' navigationItems={navigationItems} />
                    <Switch>
                        <Route exact={true} path='/' component={ArrayPlaygrounds} />
                        <Route path='/arrays' component={ArrayPlaygrounds} />
                        <Route path='/lists' component={ListPlaygrounds} />
                        <Route path='/trees' component={TreePlaygrounds} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </MuiThemeProvider>;
    }
}



import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { LayoutProvider } from './components/context/LayoutContext';
import Layout from './components/layout/Layout'
import Main from './components/layout/main/Main';
import About from './components/pages/components/about/About';
import Servises from './components/pages/components/servises/Servises';
import Detail from './components/pages/Detail';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <LayoutProvider>
        <Route path='/' render={() =>
        <Layout>
          <Switch>
            <Route path={'/about'} component={About}/>
            <Route path={'/servis'} component={Servises}/>
            <Route exact path={'/'} component={Main}/>
            <Route path={'/detail/:id'} component={Detail}/>
          </Switch>
        </Layout>
        }/>
      
      </LayoutProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

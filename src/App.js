import './App.css';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import { Route, Switch } from 'react-router-dom';
import Tweet from './Tweet/Tweet';
import SmallHeader from './SmallHeader/SmallHeader'

function App() {
  return (
    <div className='app-container'>

      <Header />

      <main className='app-main'>

        <SmallHeader />

        <Switch>

          <Route exact path='/' render={() => <Feed />} />

          <Route  path='/t/:id' render={() => <Tweet />} />

          <Route render={() => <div>Not found</div>} />

        </Switch>

      </main>

      <aside>

        stuff
        stuff
      </aside>

    </div>
  );
}

export default App;

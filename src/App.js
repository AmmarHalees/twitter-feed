import './App.css';
import Feed from './Feed/Feed';
import Header from './Header/Header';

function App() {
  return (
    <div className='app-container'>

      <Header/>

      <main>

          <Feed/>

      </main>

      <aside>

        stuff
      </aside>
     
    </div>
  );
}

export default App;

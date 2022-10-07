import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from './components/Login'
import JobList from './components/JobList'
import NewJob from './components/NewJob'
import ViewJob from './components/ViewJob'
import EditJob from './components/EditJob'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/joblist" element={<JobList/>}/>
          <Route path="/newjob" element={<NewJob/>}/>
          <Route path="/viewjob/:id" element={<ViewJob/>}/>
          <Route path="/editjob/:id" element={<EditJob/>}/>
        </Routes>
      </BrowserRouter>


      <footer className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;

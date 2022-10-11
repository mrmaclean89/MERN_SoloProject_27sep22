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
        {/* <Navigate to="/joblist"/> */}
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/joblist" element={<JobList/>}/>
          <Route path="/newjob" element={<NewJob/>}/>
          <Route path="/viewjob/:id" element={<ViewJob/>}/>
          <Route path="/editjob/:id" element={<EditJob/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Fgrass-background-golf-courses-green-lawn-pattern-textured-background_26364955.htm&psig=AOvVaw0fRHmH1_Z6JXPZMFzoHVec&ust=1665484908103000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCRjIW91foCFQAAAAAdAAAAABAN')]
import './App.css'
import {Route, Switch} from 'react-router-dom'
import BlogsData from './components/BlogsData'
import Home from './components/Home'
import Signup from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/blogs" component={BlogsData} />
    <NotFound />
  </Switch>
)

export default App

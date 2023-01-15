import './App.css';
import {Route} from "react-router-dom";
import Layout from './Layout/Layout';
import HomePage from "./Pages/HomePage/HomePage";
import TwiteProvider from './Context/TwiteProvider/TwiteProvider';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Profile from './Pages/Profile/Profile';
import UserProvider from './Context/UserProvider/UserProvider';


function App() {
  return (
      <UserProvider>
          <AuthProvider>
            <TwiteProvider>
              <Layout>
                  <Route path='/' component={HomePage} exact={true}/>
                  <Route path="/Login" component={Login}/>
                  <Route path="/SignUp" component={SignUp}/>
                  <Route path="/Profile" component={Profile}/>
              </Layout>
            </TwiteProvider>
        </AuthProvider>
      </UserProvider>
  );
}

export default App;
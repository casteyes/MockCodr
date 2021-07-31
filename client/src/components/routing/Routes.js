import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts'
import Post from '../post/Post'




const Routes = props => {
    return (
        <section className="container">
        <Alert />
        <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Profiles" component={Profiles} />
            <Route exact path="/Profile/:id" component={Profile} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/CreateProfile" component={CreateProfile} />
            <PrivateRoute exact path="/Edit-Profile" component={EditProfile} />
            <PrivateRoute exact path="/Add-Experience" component={AddExperience} />
            <PrivateRoute exact path="/Add-Education" component={AddEducation} />
            <PrivateRoute exact path="/Posts" component={Posts} />
            <PrivateRoute exact path="/Post/:id" component={Post} />
        </Switch>
      </section>
    );
  };
  
  export default Routes;
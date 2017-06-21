import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Resources from './components/resources';
import Weather from './components/weather';
import Videos from './components/videos';
import Users from './components/users';
import Main from './components/main';
import YourSkills from './components/your_skills';
import JobRequests from './components/jobrequests_index';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from  './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import JobRequestDetail from './components/jobrequest_detail';


export default (
    <Route path="/" component={App} >
        <IndexRoute component={Main}/>
        <Route path="posts" component={PostsIndex} />
        <Route path="yourskills" component={YourSkills} />
        <Route path="jobrequests" component={JobRequests} />
        <Route path="weather" component={Weather} />
        <Route path="videos" component={Videos} />
        <Route path="users" component={Users} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow} />
        <Route path="jobrequest/:id" component={RequireAuth(JobRequestDetail)} />
        <Route path="resources" component={RequireAuth(Resources)} />
        <Route path="feature" component={RequireAuth(Feature)} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />       
    </Route>
);
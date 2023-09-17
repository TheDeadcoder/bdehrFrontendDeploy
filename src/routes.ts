import Home from './homepage.svelte';
import userLogin from './lib/userlogin.svelte';
import hospitalLogin from './lib/hospitalLogin.svelte';
import doctorLogin from './lib/doctorLogin.svelte';
import About from './lib/about.svelte';
import userSignUp from './lib/usersignup.svelte';
import User from './lib/user.svelte';

export const routes = {
    // Define your routes here
    '/': Home,
    '/about': About,
    '/userlogin': userLogin,
    '/usersignup': userSignUp,
    '/user': User,
    '/hospitalogin': hospitalLogin,
    '/doctorlogin': doctorLogin,
    // Add more routes as needed
};
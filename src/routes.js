import Home from './components/home/Home.vue'
// const Home = () => import('./components/home/Home.vue')

import About from './components/about/About.vue'
// const About = () => System.import('./components/about/About.vue').then(m => m.default)

import Register from './components/register/Register.vue'
// const Register = () => System.import('./components/register/Register.vue').then(m => m.default)

import Portfolio from './components/portfolio/Portfolio.vue'

export const routes = [
  { path: '', name: 'home', component: Home, title: 'Home', menu: true},
  { path: '/about', name: 'about', component: About, title: 'About', menu: true},
  { path: '/portfolio/:id', name: 'portfolio', component: Portfolio, title: 'Portfolio', menu: false},
  { path: '/register/', name: 'register', component: Register, title: 'Register', menu: false},
  { path: '/register/:id', name: 'change', component: Register, title: 'Register', menu: false},
  { path: '*', component: Home, menu: false},
];

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './view/App'
import CounterPage from './view/CounterPage'
import AboutPage from './view/AboutPage'
import NotFoundPage from './view/NotFoundPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CounterPage} />
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
)

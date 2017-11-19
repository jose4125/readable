import React from 'react';
import Link from '../../components/Link';

const NotFound = () =>
  <div>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
    <Link to="/">Take a look to other posts.</Link>
  </div>

export default NotFound;
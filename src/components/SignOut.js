import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.SignOut}
  >
    Sign Out
  </button>

export default SignOutButton;
import React from 'react';
import { useEffect } from 'react';

import { testFunction } from '../../../functions/signupOrLogin/helpers/helpers';

const SignOrLogin = () => {

  useEffect(() => {
    testFunction();
  }, []);

  return (
    <div>SignOrLogin</div>
  );
};

export default SignOrLogin;
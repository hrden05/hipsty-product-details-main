import React, { useState } from 'react';
import { etsyLogo } from './svgFiles.jsx'

function HeaderBar() {
  return (
    <div className='etsyLogo'>{etsyLogo}</div>
  );
}

export default HeaderBar;

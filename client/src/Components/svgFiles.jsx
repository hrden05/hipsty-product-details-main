import React from 'react';

const groceryCartSVG = (
  <svg className='SVGIcon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' height='48' width='48'>
    <polygon className='SVGBlue' points='43,8 41.9,6.1 40,5 41.9,3.9 43,2 44.1,3.9 46,5 44.1,6.1' />
    <polygon className='SVGBlue' points='6,27 4.9,25.1 3,24 4.9,22.9 6,21 7.1,22.9 9,24 7.1,25.1' />
    <polygon className='SVGBlue' points='43,41 41.9,39.1 40,38 41.9,36.9 43,35 44.1,36.9 46,38 44.1,39.1' />
    <polygon className='SVGLightBlue' points='15.8,27 38.3,25 40,12.8 12.2,12.8' />
    <polygon className='SVGLightBlue' points='15.7,18.4 20.5,18.2 20.5,14 14.6,14' />
    <polygon className='SVGLightBlue' points='23.5,25.3 28.5,24.9 28.5,20.9 23.5,21.1' />
    <polygon className='SVGLightBlue' points='23.5,18.1 28.5,17.9 28.5,14 23.5,14' />
    <polygon className='SVGLightBlue' points='17.5,25.9 20.5,25.6 20.5,21.2 16.4,21.4' />
    <polygon className='SVGLightBlue' points='31.5,17.8 37.2,17.5 37.7,14 31.5,14' />
    <polygon className='SVGLightBlue' points='31.5,24.6 36.2,24.1 36.8,20.5 31.5,20.8' />
    <circle cx='35' cy='41' r='3' />
    <circle cx='15' cy='41' r='3' />
    <path d='M40,10H13.6l-0.6-2.5L11,6H4v4h5.4l0.6,2.5L13.9,28l-1.4,5.5l1.9,2.5H38v-4H17.1l0.5-2.1L38.2,28l1.8-1.7l2-14L40,10z M20.5,25.6l-3,0.3l-1.1-4.4l4.1-0.2V25.6z M20.5,18.2l-4.8,0.2L14.6,14h5.9V18.2z M28.5,24.9l-5,0.5v-4.2l5-0.2V24.9zM28.5,17.9l-5,0.2V14h5V17.9z M36.2,24.1l-4.7,0.4v-3.8l5.3-0.2L36.2,24.1z M37.2,17.5l-5.7,0.2V14h6.2L37.2,17.5z' />
  </svg>
);

const shippingTruckSVG = (
  <svg className='SVGIcon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' height='48' width='48'>
    <circle className='SVGBlue' cx='13' cy='38' r='4' />
    <circle className='SVGBlue' cx='35' cy='38' r='4' />
    <path d='M38.6,15c-0.6-0.3-1.1-0.6-1.7-1H28v14H4v7c0.4,0.4,0.6,0.6,1,1h2.4c0.8-2.3,3-4,5.6-4s4.8,1.7,5.6,4h10.7c0.8-2.3,3-4,5.6-4s4.8,1.7,5.6,4H43c0.4-0.4,0.6-0.6,1-1V24L38.6,15z M32,24v-6h4.9l3.6,6H32z' />
    <path className='SVGLightBlue' d='M28,10c-0.8-0.8-1.2-1.2-2-2H6c-0.8,0.8-1.2,1.2-2,2v18h24V10z' />
  </svg>
);

const handmadeIconSVG = (
  <svg className='SVGIcon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 47.1 62.5' width='24' height='36'>
    <path d='M19.6 47.6c-.6-.4-7.9-7.2-8.1-7.5-.2-.3-1.8-2.6-2.1-3.1-.4-.5-5.9-8.7-7-10.4-.7-1.1-1.9-2.8-1.9-3.3s.6-1.4.7-1.5c.1-.2 1.2-.7 1.7-.4.4.3 3.7 3.2 3.8 3.6s5 4.6 5.3 4.7c.4.1.6-1 .6-1s-.9-2.1-1-2.3c-.1-.2-6.1-12.4-6.2-12.8-.1-.4-1.9-3.5-1.9-4S4.6 8 5 7.9c.4-.1 2 0 2.2.1.2.2 7.9 11.9 8.8 13 .8 1.1 2.5 3.3 2.9 3.4.3.1.9-1.1.9-1.1s-3.2-11.8-3.3-12.2-2.8-6.6-2.9-7.2.2-2 .5-2.3 1.9-.6 2.7-.2c.8.8 4.3 8.5 4.8 9.6s4 8.5 4.5 9.1c.5.6 1.1.6 1.6.3.3-.1.3-9.4.3-9.4s-.1-2.4.2-3.5c.1-.6 1.4-1.4 2.1-1.5s1.9 1.5 2.1 1.8c.1.1.6 4.9 1.2 9.6.6 4.5 1.4 9 1.4 9.2 0 .3.5 1.1 1 1 .5-.2 3.6-2.4 4.1-2.6.6-.3 3.3-2.2 3.5-2.3.2-.1 1.4.1 1.4.1s.8.9 1.4 1.8c-.3.9-.6 1.5-1 2.2-1.7 3.2-3.8 6.6-5 8.8-1 1.9-1.9 3.6-1.9 3.7 0 .2 5.6 10.4 5.6 10.4L26.7 61.5s-.6-.7-1.3-2.1c-.7-1.3-1.5-3.2-2.3-4.9-1.9-3.7-3.2-6.7-3.5-6.9z' />
  </svg>
);

const hourglassSVG = (
  <svg className='SVGIcon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48' height='48'>
    <path className='hourglass' d='M16,14.7c0,0.4,0.1,0.9,0.4,1.2l5.2,6.9c0,0.9,0,1.5,0,2.4l-5.2,6.9c-0.3,0.3-0.4,0.8-0.4,1.2V38h16v-4.7c0-0.4-0.1-0.8-0.4-1.2l-5.2-6.9c0-0.9,0-1.5,0-2.4l5.2-6.9c0.3-0.4,0.4-0.8,0.4-1.2V10H16V14.7z' />
    <path className='hourglassOutline' d='M36,14.7V10c0.8-0.8,1.2-1.2,2-2V6h-2H12h-2v2c0.8,0.8,1.2,1.2,2,2v4.7c0,1.3,0.4,2.6,1.2,3.6l4.3,5.7l-4.3,5.7c-0.8,1-1.2,2.3-1.2,3.6V38c-0.8,0.8-1.2,1.2-2,2v2h2h24h2v-2c-0.8-0.8-1.2-1.2-2-2v-4.7c0-1.3-0.4-2.6-1.2-3.6L30.5,24l4.3-5.7C35.6,17.2,36,16,36,14.7z M32,14.7c0,0.4-0.1,0.9-0.4,1.2l-5.2,6.9c0,0.9,0,1.5,0,2.4l5.2,6.9c0.3,0.3,0.4,0.8,0.4,1.2V38H16v-4.7c0-0.4,0.1-0.8,0.4-1.2l5.2-6.9c0-0.9,0-1.5,0-2.4l-5.2-6.9c-0.3-0.4-0.4-0.8-0.4-1.2V10h16C32,10,32,14.7,32,14.7z' />
    <path className='hourglassFill' d='M18,12c0,0.1,0,2.2,0,2.3c0,0.2,0.1,0.4,0.2,0.6l5,6.7c0.4,0.5,1.2,0.5,1.6,0l5-6.7c0.1-0.2,0.2-0.4,0.2-0.6c0-0.1,0-2.2,0-2.3C26,12,22,12,18,12z' />
    <path className='hourglassFill' d='M30,36c0-0.1,0-0.2,0-0.3c0-0.2-0.1-0.4-0.2-0.6l-5-6.7c-0.4-0.5-1.2-0.5-1.6,0l-5,6.7c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.1,0,0.2,0,0.3C22,36,26,36,30,36z' />
  </svg>
);

const FAQsArrow = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' style={{'transform':'rotate(0deg)', 'transition': 'transform 200ms ease-in'}}>
    <path className='FAQsArrow' d='M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z' />
  </svg>
);

const FAQsArrowRotate = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' style={{'transform':'rotate(-180deg)', 'transition': 'transform 200ms ease-in'}}>
    <path className='FAQsArrow' d='M12,15.414L7.293,10.707A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414Z' />
  </svg>
);

export {
  groceryCartSVG,
  shippingTruckSVG,
  handmadeIconSVG,
  hourglassSVG,
  FAQsArrow,
  FAQsArrowRotate,
};

// import calcScroll from './modules/calcScroll';
// import scrollUp from './modules/scrollUp';

import accordion from "./modules/accordion";
import hamburger from "./modules/hamburger";
import modals from "./modules/modals";
import sliderDrag from "./modules/sliderDrag";
import tab from "./modules/tab";
import videoPlay from "./modules/videoPlay";

document.addEventListener('DOMContentLoaded', () => {
'use stricti';

hamburger();
sliderDrag();
tab();
videoPlay();
accordion();

modals();
// scrollUp();
// calcScroll();
});
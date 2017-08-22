import $ from 'jquery';
import StickyNavigation from 'app/sticky-navigation';
import Slider from 'app/slider.js';
import Faq from 'app/faq';

const Main = class {
  constructor() {

    new StickyNavigation();
    new Slider();
    new Faq();
  }
};

export default Main;

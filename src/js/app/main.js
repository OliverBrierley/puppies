import $ from 'jquery';
import StickyNavigation from 'app/sticky-navigation';
import Slider from 'app/slider.js';

const Main = class {
  constructor() {

    new StickyNavigation();
    new Slider();
  }
};

export default Main;

import $ from 'jquery';
import StickyNavigation from 'app/sticky-navigation';
import Slider from 'app/slider';
import Faq from 'app/faq';
import Countdown from 'app/countdown-awesome';

const Main = class {
  constructor() {

    new StickyNavigation();
    new Slider();
    new Faq();
    new Countdown();
  }
};

export default Main;

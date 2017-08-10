import $ from "jquery";
import Slick from "kenwheeler/slick";

const Slider = class {
  constructor() {
    this.$slider = $('.slider');
    this.$items = this.$slider.find('.item');
    this.halfHeight = $(window).height() / 1.5;

    this._init_ui();
  }

  _init_ui() {
    this.$items.each((idx, elm) => {
      $(elm).css('height', this.halfHeight);
    });

    this.slider();
  }

  slider() {
    this.$slider.slick({
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 1
    });
  }
};

export default Slider;

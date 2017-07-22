import $ from 'jquery';

const StickyNavigation = class {
  constructor() {
    this.$body = $('body');
    this.$header = this.$body.find('.site-header');
    this.offset = this.$header.offset().top;
    this.$w = $(window);

    if(this.$header.length ) {
      this._init_events();
    }
  }

  _init_events() {
    this.$w.on('scroll', (e) => {
      this.scroll(e);
    });
  }

  scroll(e) {
    let scrollTop = this.$w.scrollTop();

    if(scrollTop >= this.offset) {
      this.$body.addClass('stuck');
    } else {
      this.$body.removeClass('stuck');
    }
  }
};

export default StickyNavigation;

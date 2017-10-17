import $ from 'jquery';

const Countdown = class {
  constructor() {
    if($('#countdown').length) {
      this._init_ui();
    }
  }

  _init_ui() {
    var countdown = $('#countdown'),
        countdownDate = countdown.attr('data-date'),
        countDownDateJS = new Date(countdownDate).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      console.log(now);

      // Find the distance between now an the count down date
      var distance = countDownDateJS - now,
          daysEl = countdown.find('.days .value'),
          hoursEl = countdown.find('.hours .value'),
          minutesEl = countdown.find('.minutes .value');

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      // Check if number string is < 2 digits, if so adds a 0
      if(hours.toString().length === 1) {
        hours = "0" + hours;
      }

      if(minutes.toString().length === 1) {
        minutes = "0" + minutes;
      }

      // Display the result in the element with id="demo"
      daysEl.text(days);
      hoursEl.text(hours);
      minutesEl.text(minutes);

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
         // Change content to something that isnt a countdown
      }
    }, 1000);
  }
};

export default Countdown;

// Importing Jquery selector library (a third party dependency)
// Using $ to represent Jquery
import $ from "jquery";

// Instansiate a constant variable, which is a class object named Faq
const Faq = class {
  // Inside our Class Obj create a constructor
  constructor() {
    // Define a globally scoped variable using jquery selector library to get the faq element via a class selector
    this.$faq = $('.faq');
    // Define an array of elements using the find function
    this.$items = this.$faq.find('.item');

    // Instansiate a function we created below
    this._init_event();
  }

  // Our new function (_init_event)
  _init_event() {
    // Using the jquery each function go through our array
    // each returns, the index (idx), and the el (element)
    $(this.$items).each((idx, el) => {
      // Using jquery selector on el add a click event - using the third argument (child element) of the click function
      $(el).on('click', '.question', (e) => {
        // Prevent the default functionality
        e.preventDefault();

        // Use a new function and pass in el (the element)
        this.toggle_faq(el);
      });
    });
  }

  // Our new function (toggle_faq) which accepts el (element)
  toggle_faq(el) {
    if($(el).hasClass('open')) {
      // Use a new function and pass in el (the element)
      this.close_faq(el);
    } else {
      // Use a new function
      this.close_faq();
      // Use a new function and pass in el (the element)
      this.open_faq(el);
    }
  }

  // Our new function (close_faq) which accepts el (element)
  close_faq(el = this.$items) {
      // If it finds an item with an open class it removes all '.open' classes from the items in our array if no argument is passed in
      $(el).removeClass('open');
  }

  // Our new function (open_faq) which accepts el (element)
  open_faq(el) {
    // Add the open class to the element
    $(el).addClass('open');
  }
};

// Export our Class
export default Faq;

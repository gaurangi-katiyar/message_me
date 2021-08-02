// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
// require("semantic-ui-sass")
// import Rails, { $ } from "@rails/ujs"
// import Turbolinks from "turbolinks"
// import * as ActiveStorage from "@rails/activestorage"
// import "channels"
// import 'jquery'

// Rails.start()
// Turbolinks.start()
// ActiveStorage.start()
// //= require semantic-ui
// //= require jquery
// //= require jquery_ujs
// //= require turbolinks
// //= require semantic-ui
// //= require_tree .

// $(document).on("turbolinks:load", () => $(".ui.dropdown").dropdown());

import Rails from "@rails/ujs"
import 'jquery'
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
require("semantic-ui-sass")

Rails.start()
Turbolinks.start()
ActiveStorage.start()


$(document).on("turbolinks:load", function() {
  $(".ui.dropdown").dropdown();
  $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
  });
})
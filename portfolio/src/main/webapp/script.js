// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
// function addRandomGreeting() {
//   const greetings =
//       ["You talking to me?", 'Say "Hello" to my little friend', "Open the pod bay door, please, HAL", "Striker: surely you can't be serious", "Yo, Adrian", "My precious", "TETSUO!!"];

//   // Pick a random greeting.
//   const greeting = greetings[Math.floor(Math.random() * greetings.length)];

//   // Add it to the page.
//   const greetingContainer = document.getElementById('greeting-container');
//   greetingContainer.innerText = greeting;
// }
const toggleNav = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".nav-link");

// show navbar menu on small screen devices
toggleNav.addEventListener("click", () => {
  navMenu.classList.toggle("show-nav");
});

// close navbar menu and set active css class to clicked nav link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // remove active css class from all nav link
    navLinks.forEach((link) => link.classList.remove("active"));
    // add active css class to clicked link
    this.classList.add("active");
    // hide nav menu
    navMenu.classList.remove("show-nav");
  });
});

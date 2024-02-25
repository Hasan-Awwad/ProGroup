/* global $ */
var script = document.createElement('script')
script.src = "https://code.jquery.com/jquery-3.6.0.min.js"
document.head.appendChild(script)
script.onload = function () {
    $(document).ready(function () {
        "use strict";

        // Page cursors
        var t = document.getElementById("cursor"),
            e = document.getElementById("cursor2"),
            i = document.getElementById("cursor3");

        // Ensure that the variables t, e, and i are defined before using them
        if (t && e && i) {
            document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
                t.style.left = n.clientX + "px";
                t.style.top = n.clientY + "px";
                e.style.left = n.clientX + "px";
                e.style.top = n.clientY + "px";
                i.style.left = n.clientX + "px";
                i.style.top = n.clientY + "px";
            });
        }

        // Ensure that the variables t, e, and i are defined before using them
        if (t && e && i) {
            function n(t) {
                e.classList.add("hover");
                i.classList.add("hover");
            }

            function s(t) {
                e.classList.remove("hover");
                i.classList.remove("hover");
            }

            s();

            var hoverTargets = document.querySelectorAll(".hover-target");

            // Ensure that the hover targets are defined before iterating over them
            if (hoverTargets) {
                for (var a = hoverTargets.length - 1; a >= 0; a--) {
                    o(hoverTargets[a]);
                }
            }

            function o(t) {
                t.addEventListener("mouseover", n);
                t.addEventListener("mouseout", s);
            }
        }

        // Navigation

        var app = function () {
            var body = undefined;
            var menu = undefined;
            var menuItems = undefined;

            var init = function init() {
                body = document.querySelector('body');
                menu = document.querySelector('.menu-icon');
                menuItems = document.querySelectorAll('.nav__list-item');
                body.classList.add("light");
                applyListeners();
            };

            var applyListeners = function applyListeners() {
                // Ensure that the menu is defined before adding the event listener
                if (menu) {
                    menu.addEventListener('click', function () {
                        return toggleClass(body, 'nav-active');
                    });
                }
            };

            var toggleClass = function toggleClass(element, stringClass) {
                if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
            };

            init();
        }();

        // Switch light/dark

        $("#switch").on('click', function () {
            if ($("body").hasClass("light")) {
                $("body").removeClass("light");
                $("#switch").removeClass("switched");
            } else {
                $("body").addClass("light");
                $("#switch").addClass("switched");
            }
        });

        $(document).on('click', function (event) {
            var menu = $('.menu-icon');
            var menuItems = $('.nav__list-item');
            var menuItems_a = $('.nav__list-item a');


            // Check if the clicked element is not a menu item or inside the menu
            if (!menuItems.is(event.target) && !menu.is(event.target) && !menuItems_a.is(event.target) && menu.has(event.target).length === 0) {
                $("body").removeClass("nav-active");
            }
        });

        $(".nav__list-item").on('click', function () {
            var stringClass = 'active-nav';
            var old_active = document.querySelector('.active-nav');
            old_active.classList.remove(stringClass);
            var new_active = $(this);
            new_active.addClass(stringClass);
        });

    });
};

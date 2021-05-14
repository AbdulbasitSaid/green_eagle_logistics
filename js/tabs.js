'use strict';

function Tabs() {
    var bindAll = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        var tabIndicator = document.querySelectorAll('[indicator]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active-tab');
            tabIndicator[i].classList.remove('active-indicator');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.add('hidden');
        }
    }

    var change = function (e) {
        clear();
        e.target.classList.add('active-tab');

        var id = e.currentTarget.getAttribute('data-tab');
        var indicatorId = e.currentTarget.getAttribute('data-tab') + "_indicator";
        document.getElementById(indicatorId).classList.add('active-indicator');
        document.getElementById(id).classList.remove('hidden');
    }

    bindAll();
}

var connectTabs = new Tabs();

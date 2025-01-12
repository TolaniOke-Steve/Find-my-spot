"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bootstrap = require("bootstrap");
document.addEventListener('DOMContentLoaded', function () {
    var pop_over = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
    pop_over.forEach(function (element) {
        var pop_over_desc = new bootstrap.Popover(element, {
            trigger: 'manual'
        });
        element.addEventListener('mouseenter', function () {
            pop_over_desc.show();
        });
        element.addEventListener('mouseleave', function () {
            pop_over_desc.hide();
        });
    });
});

'use strict';

var $$Array = require("bs-platform/lib/js/array.js");

function toUrlPath(t) {
  var paths;
  if (typeof t === "number") {
    switch (t) {
      case /* RootPage */0 :
          paths = /* [] */0;
          break;
      case /* FetchedDogPictures */1 :
          paths = /* :: */[
            "a",
            /* :: */[
              "b",
              /* [] */0
            ]
          ];
          break;
      case /* InvalidRoute */2 :
          paths = /* :: */[
            "404",
            /* [] */0
          ];
          break;
      
    }
  } else {
    var match = t[0];
    paths = match !== undefined ? /* :: */[
        "blinking",
        /* :: */[
          match,
          /* [] */0
        ]
      ] : /* :: */[
        "blinking",
        /* [] */0
      ];
  }
  return "/" + $$Array.of_list(paths).join("/");
}

function parse(urlPath) {
  if (urlPath) {
    switch (urlPath[0]) {
      case "a" :
          var match = urlPath[1];
          if (match && match[0] === "b" && !match[1]) {
            return /* FetchedDogPictures */1;
          } else {
            return /* InvalidRoute */2;
          }
      case "blinking" :
          var match$1 = urlPath[1];
          if (match$1) {
            if (match$1[1]) {
              return /* InvalidRoute */2;
            } else {
              return /* BlinkingGreeting */[match$1[0]];
            }
          } else {
            return /* BlinkingGreeting */[undefined];
          }
      default:
        return /* InvalidRoute */2;
    }
  } else {
    return /* RootPage */0;
  }
}

exports.toUrlPath = toUrlPath;
exports.parse = parse;
/* No side effect */

'use strict';

var React = require("react");
var Routes$ReasonReactExamples = require("./Routes.bs.js");
var RouterLink$ReasonReactExamples = require("./RouterLink.bs.js");

function GlobalNavs(Props) {
  var children = Props.children;
  var navs = React.createElement("div", {
        className: "NavsList"
      }, React.createElement("p", {
            className: "NavsList-title"
          }, "NAVIGATION LINKS"), React.createElement(RouterLink$ReasonReactExamples.make, {
            href: Routes$ReasonReactExamples.toUrlPath(/* RootPage */0),
            children: "Root Page"
          }), React.createElement(RouterLink$ReasonReactExamples.make, {
            href: Routes$ReasonReactExamples.toUrlPath(/* BlinkingGreeting */[undefined]),
            children: "Blinking Greeting"
          }), React.createElement(RouterLink$ReasonReactExamples.make, {
            href: Routes$ReasonReactExamples.toUrlPath(/* FetchedDogPictures */1),
            children: "Fetched dog pictures"
          }));
  return React.createElement("div", {
              className: "GlobalNav"
            }, children, navs);
}

var make = GlobalNavs;

exports.make = make;
/* react Not a pure module */

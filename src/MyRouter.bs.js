'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Routes$ReasonReactExamples = require("./Routes.bs.js");
var GlobalNavs$ReasonReactExamples = require("./GlobalNavs.bs.js");
var BlinkingGreeting$ReasonReactExamples = require("./BlinkingGreeting/BlinkingGreeting.bs.js");
var FetchedDogPictures$ReasonReactExamples = require("./FetchedDogPictures/FetchedDogPictures.bs.js");

function MyRouter(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var currentRoute = Routes$ReasonReactExamples.parse(url[/* path */0]);
  if (typeof currentRoute === "number") {
    switch (currentRoute) {
      case /* RootPage */0 :
          return React.createElement(GlobalNavs$ReasonReactExamples.make, {
                      children: React.createElement("p", undefined, "This is the root page!")
                    });
      case /* FetchedDogPictures */1 :
          return React.createElement(GlobalNavs$ReasonReactExamples.make, {
                      children: React.createElement(FetchedDogPictures$ReasonReactExamples.make, { })
                    });
      case /* InvalidRoute */2 :
          return React.createElement(GlobalNavs$ReasonReactExamples.make, {
                      children: React.createElement("p", undefined, "Invalid route!")
                    });
      
    }
  } else {
    var match = currentRoute[0];
    if (match !== undefined) {
      return React.createElement(GlobalNavs$ReasonReactExamples.make, {
                  children: React.createElement(BlinkingGreeting$ReasonReactExamples.make, {
                        children: "Hello - " + match
                      })
                });
    } else {
      return React.createElement(GlobalNavs$ReasonReactExamples.make, {
                  children: React.createElement(BlinkingGreeting$ReasonReactExamples.make, {
                        children: "Hello - no greetings supplied!"
                      })
                });
    }
  }
}

var make = MyRouter;

exports.make = make;
/* react Not a pure module */

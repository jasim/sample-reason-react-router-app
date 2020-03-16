[@react.component]
let make = (~href, ~className=?, ~children) => {
  let handleClick = e => {
    /* for more complete Link component see https://github.com/SVdotCO/pupilfirst/blob/master/app/javascript/shared/components/Link.re */
    ReactEvent.Mouse.preventDefault(e);
    ReasonReactRouter.push(href);
  };

  <a href ?className onClick=handleClick> children </a>;
};
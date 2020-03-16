[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let currentRoute = Routes.parse(url.path);
  switch (currentRoute) {
  | Routes.RootPage =>
    <GlobalNavs>
      <p> {React.string("This is the root page!")} </p>
    </GlobalNavs>
  | Routes.BlinkingGreeting(None) =>
    <GlobalNavs>
      <BlinkingGreeting>
        {React.string("Hello - no greetings supplied!")}
      </BlinkingGreeting>
    </GlobalNavs>
  | Routes.BlinkingGreeting(Some(message)) =>
    <GlobalNavs>
      <BlinkingGreeting>
        {React.string("Hello - " ++ message)}
      </BlinkingGreeting>
    </GlobalNavs>
  | Routes.FetchedDogPictures =>
    <GlobalNavs> <FetchedDogPictures /> </GlobalNavs>
  | InvalidRoute =>
    <GlobalNavs> <p> {React.string("Invalid route!")} </p> </GlobalNavs>
  };
};
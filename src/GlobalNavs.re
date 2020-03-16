[@react.component]
let make = (~children) => {
  open Routes;
  let navs =
    <div className="NavsList">
      <p className="NavsList-title"> {React.string("NAVIGATION LINKS")} </p>
      <RouterLink href={toUrlPath(RootPage)}>
        {React.string("Root Page")}
      </RouterLink>
      <RouterLink href={toUrlPath(BlinkingGreeting(None))}>
        {React.string("Blinking Greeting")}
      </RouterLink>
      <RouterLink href={toUrlPath(FetchedDogPictures)}>
        {React.string("Fetched dog pictures")}
      </RouterLink>
    </div>;
  <div className="GlobalNav"> children navs </div>;
};
type t =
  | RootPage
  | BlinkingGreeting(option(string))
  | FetchedDogPictures
  | InvalidRoute;

let toUrlPath = t => {
  let paths =
    switch (t) {
    | RootPage => []
    | BlinkingGreeting(None) => ["blinking"]
    | BlinkingGreeting(Some(message)) => ["blinking", message]
    | FetchedDogPictures => ["a", "b"]
    | InvalidRoute => ["404"]
    };
  "/" ++ (paths |> Array.of_list |> Js.Array.joinWith("/"));
};

let parse = urlPath => {
  switch (urlPath) {
  | [] => RootPage
  | ["blinking"] => BlinkingGreeting(None)
  | ["blinking", message] => BlinkingGreeting(Some(message))
  | ["a", "b"] => FetchedDogPictures
  | _ => InvalidRoute
  };
};
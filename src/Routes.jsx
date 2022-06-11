import React from "react";
import { Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = React.lazy(() => import("./components/Home"));
const MeteorExtinctionHome = React.lazy(() =>
  import("./components/MeteorExtinctionHome")
);
const MeteorExtinctionDownload = React.lazy(() =>
  import("./components/MeteorExtinctionDownload")
);
const WoodenGUIHome = React.lazy(() => import("./components/WoodenGUIHome"));
const WoodenGUIDownload = React.lazy(() =>
  import("./components/WoodenGUIDownload")
);
const Contact = React.lazy(() => import("./components/Contact"));
const IssueTemplate = React.lazy(() => import("./components/IssueTemplate"));
const CheckMEVersion = React.lazy(() => import("./components/CheckMEVersion"));
const Changelog = React.lazy(() => import("./components/Changelog"));
const NotFound = React.lazy(() => import("./components/404"));

const MyRoutes = [
  {
    element: NotFound,
    path: "*",
  },
  {
    element: Home,
    path: "/",
  },
  {
    element: MeteorExtinctionHome,
    path: "meteorextinction",
  },
  {
    element: MeteorExtinctionDownload,
    path: "meteorextinction/download",
  },
  {
    element: Changelog,
    path: "meteorextinction/download/changelog",
  },
  {
    element: CheckMEVersion,
    path: "meteorextinction/download/update",
  },
  {
    element: WoodenGUIHome,
    path: "woodengui",
  },
  {
    element: WoodenGUIDownload,
    path: "woodengui/download",
  },
  {
    element: Contact,
    path: "contact",
  },
  {
    element: IssueTemplate,
    path: "contact/issue-template",
  },
];

export default function AllRoutes(props) {
  return (
    <TransitionGroup>
      <CSSTransition
        key={props.transitionLocation.key}
        classNames={props.transitionType}
        timeout={450}
        onExited={() => props.setDisplayLocation(props.location)}
      >
        <Routes location={props.transitionLocation}>
          {MyRoutes.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.path}
                element={
                  <div style={{ position: "absolute", width: "100%" }}>
                    <route.element
                      themeMode={props.themeMode}
                      displayLocation={props.displayLocation}
                      location={props.location}
                    />
                  </div>
                }
              />
            );
          })}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

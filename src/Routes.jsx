import React from "react";

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

export const MyRoutes = [
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

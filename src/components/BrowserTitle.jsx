import { useEffect } from "react";

export default function BrowserTitle(props) {
  useEffect(() => {
    if (props.location.pathname === "/meteorextinction") {
      document.title = "Meteor Extinction - Lastand Development";
    } else if (props.location.pathname === "/meteorextinction/download") {
      document.title = "Download Meteor Extinction - Lastand Development";
    } else if (props.location.pathname === "/woodengui") {
      document.title = "Wooden GUI - Lastand Development";
    } else if (props.location.pathname === "/woodengui/download") {
      document.title = "Download Wooden GUI - Lastand Development";
    } else if (
      props.location.pathname ===
        "/meteorextinction/download/changelog/alpha-0.1.0" ||
      props.location.pathname ===
        "/meteorextinction/download/changelog/alpha-0.1.1" ||
      props.location.pathname ===
        "/meteorextinction/download/changelog/alpha-0.1.2"
    ) {
      document.title = "Changelog Meteor Extinction - Lastand Development";
    } else if (
      props.location.pathname === "/meteorextinction/download/update"
    ) {
      document.title = "Update Meteor Extinction - Lastand Development";
    } else if (props.location.pathname === "/contact") {
      document.title = "Contact - Lastand Development";
    } else if (props.location.pathname === "/contact/issue-template") {
      document.title = "Report an Issue - Lastand Development";
    } else {
      document.title = "Lastand Development";
    }
  }, [props.location]);

  return null;
}

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function BrowserTitle(props) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (props.location.pathname === "/meteorextinction") {
      document.title = "Meteor Extinction - Lastand Development";
    } else if (props.location.pathname === "/meteorextinction/download") {
      document.title =
        i18n.language === "de"
          ? "Meteor Extinction herunterladen - Lastand Development"
          : "Download Meteor Extinction - Lastand Development";
    } else if (props.location.pathname === "/woodengui") {
      document.title = "Wooden GUI - Lastand Development";
    } else if (props.location.pathname === "/woodengui/download") {
      document.title =
        i18n.language === "de"
          ? "Wooden GUI herunterladen - Lastand Development"
          : "Download Wooden GUI - Lastand Development";
    } else if (
      props.location.pathname === "/meteorextinction/download/changelog"
    ) {
      document.title =
        i18n.language === "de"
          ? "Änderungsprotokoll Meteor Extinction - Lastand Development"
          : "Changelog Meteor Extinction - Lastand Development";
    } else if (
      props.location.pathname === "/meteorextinction/download/update"
    ) {
      document.title =
        i18n.language === "de"
          ? "Meteor Extinction aktualisieren - Lastand Development"
          : "Update Meteor Extinction - Lastand Development";
    } else if (props.location.pathname === "/contact") {
      document.title =
        i18n.language === "de"
          ? "Kontakt - Lastand Development"
          : "Contact - Lastand Development";
    } else if (props.location.pathname === "/contact/issue-template") {
      document.title =
        i18n.language === "de"
          ? "Problem melden - Lastand Development"
          : "Report an Issue - Lastand Development";
    } else {
      document.title = "Lastand Development";
    }
  }, [props.location, i18n.language]);

  return null;
}

import { useEffect } from "react";

import { useTranslation } from "react-i18next";

export default function BrowserTitle(props) {
  const [t] = useTranslation();

  useEffect(() => {
    if (props.location.pathname === "/meteorextinction") {
      document.title = "Meteor Extinction - Lastand Development";
    } else if (props.location.pathname === "/meteorextinction/download") {
      document.title =
        t("title.downloadMeteorExtinction") + " - Lastand Development";
    } else if (props.location.pathname === "/woodengui") {
      document.title = "Wooden GUI - Lastand Development";
    } else if (props.location.pathname === "/woodengui/download") {
      document.title = t("title.downloadWoodenGUI") + " - Lastand Development";
    } else if (
      props.location.pathname ===
        "/meteorextinction/download/changelog/alpha-0.1.0" ||
      props.location.pathname ===
        "/meteorextinction/download/changelog/alpha-0.1.1" ||
      props.location.pathname ===
        "/meteorextinction/download/changelog/alpha-0.1.2"
    ) {
      document.title =
        t("title.changelog") + " Meteor Extinction - Lastand Development";
    } else if (props.location.pathname === "/contact") {
      document.title = t("title.contact") + " - Lastand Development";
    } else if (props.location.pathname === "/contact/issue-template") {
      document.title = t("title.reportIssue") + " - Lastand Development";
    } else {
      document.title = "Lastand Development";
    }
  }, [props.location, t]);

  return null;
}

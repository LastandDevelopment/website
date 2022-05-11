import React, { Fragment, useEffect, useMemo, useState } from "react";

import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Alpha01Changelog from "./changelogs/alpha-0.1";
import Alpha011Changelog from "./changelogs/alpha-0.1.1";
import Alpha012Changelog from "./changelogs/alpha-0.1.2";

export default function ChangelogChooser(props) {
  const [t] = useTranslation();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();

  const [versionQuery, setVersionQuery] = useState(query.get("version"));
  useEffect(() => {
    if (props.location.pathname === props.displayLocation.pathname) {
      setVersionQuery(query.get("version"));
    }
  }, [props.location, props.displayLocation, query]);

  const unknownVersionText = !(versionQuery === "" || versionQuery === null)
    ? t("updateME.unknownVersion") + ": " + versionQuery
    : t("updateME.noVersionGiven");

  if (versionQuery === "alpha-0.1") {
    return <Alpha01Changelog />;
  } else if (versionQuery === "alpha-0.1.1") {
    return <Alpha011Changelog />;
  } else if (versionQuery === "alpha-0.1.2") {
    return <Alpha012Changelog />;
  } else {
    return (
      <Fragment>
        <Typography
          variant="body1"
          className="textLarge"
          sx={{ paddingTop: 7 }}
        >
          {unknownVersionText}
        </Typography>
      </Fragment>
    );
  }
}

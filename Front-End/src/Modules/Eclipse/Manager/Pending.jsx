import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import EclipseManagerNav from "../../Nav/Eclipse/Manager/EclipseManagerNav";
import DataTable from "../../../Shared/Datatable";

function EclipseMangerPending() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "EclipseManagerPending")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload(true));
  }, []);

  let datatable = "";

  if (load) {
    datatable = (
      <DataTable
        loaded={true}
        data={data}
        submitButton={"Submit Approval"}
        path="EclipseManagerPending"
      />
    );
  }

  return (
    <div className="EclipseManagerPending">
      <div className="container-fluid request-data">
        <EclipseManagerNav heading="PENDING FOR REVIEW" />
        {datatable}
      </div>
    </div>
  );
}

export default EclipseMangerPending;

import React, { useState, useEffect } from "react";
import { variables } from "../../../ApiRoutes/Variables";
import TimManagerNav from "../../Nav/Tim/Manager/TimManagerNav";
import DataTable from "../../../Shared/Datatable";

function TimMangerRequests() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "ChangeRequests")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload("loaded"));
  }, []);

  return (
    <div className="TimManagerRequest">
      <div className="container-fluid request-data">
        <TimManagerNav heading="REQUEST FOR CHANGES" />
        {load === "loaded" ? (
          <DataTable
            loaded={true}
            data={data}
            submitButton={"Submit Approval"}
          />
        ) : (
          <DataTable loaded={false} data={data} />
        )}
      </div>
    </div>
  );
}

export default TimMangerRequests;
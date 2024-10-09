import React, { Fragment, useContext } from "react";
import TrackShipment from "../../Components/Shared/TrackShipment/TrackShipment";
import Context from "../../Store/Context";

function Home() {
  const ctx = useContext(Context);
  const err =
    ctx.shipmentDetails && ctx.shipmentDetails.err
      ? { state: true, msg: ctx.shipmentDetails.err }
      : false;

  const errStyle = {
    backgroundColor: "#FEF3F2",
    padding: "20px",
    border: "solid 1px #FECDCA",
    margin: "auto",
    marginTop: "30px",
    width: "90%",
    maxWidth: "350px",
  };

  return (
    <Fragment>
      <TrackShipment />
      {err && <div style={errStyle}>{err.msg}</div>}
    </Fragment>
  );
}

export default React.memo(Home);

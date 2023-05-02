import React from "react";
import Map from "./Map";
import ChartComponent from "./Chart";
import { useSelector } from "react-redux";
import { RootState } from "store";

const Dashboard = () => {
  const { toggle } = useSelector((state: RootState) => state.toggle);
  return (
    <>
      {toggle ? (
        <></>
      ) : (
        <>
          <ChartComponent />
          <Map />
        </>
      )}
    </>
  );
};

export default Dashboard;

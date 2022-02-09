import React from "react";
import "./home.css";
import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo";
import Chart from "../../Components/Chart/Chart";
import {userData }from "../../dummyData";
import WidgetSm from "../../Components/WidgetSm/WidgetSm";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}

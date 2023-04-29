import React from "react";
import BarChart from "./column-chart";
const Graph =()=>{
    return(
        <div className="mb-6 flex w-full flex-wrap md:flex-nowrap bg-white">
        <BarChart
          widgetTitle={"Sales History"}
          colors={["#03D3B5"]}
          series={[
            "20",
            "30",
            "30",
            "30",
            "20",
            "30",
            "30",
            "30",
            "20",
            "30",
            "30",
            "30",
          ]}
          categories={[
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december",
          ]}
        />
      </div>
    );
}
export default Graph;
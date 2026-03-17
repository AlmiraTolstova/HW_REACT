import { connect } from "react-redux";
import { PieChart } from "@mui/x-charts/PieChart";
import { calculateStatistic } from "../../redux/actions/bookActions";
import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function Dashboard({ statistics, calculateStatistic }) {
  useEffect(() => {
    calculateStatistic();
  }, [calculateStatistic]);

  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };

  const [totalAvailableBooks, setTotalAvailableBooks] = useState([]);
  const [bookByDecade, setBookByDecade] = useState({ xAxis: [], data: [] });

  useEffect(() => {
    setTotalAvailableBooks([
      {
        label: "borrowed Books",
        value: statistics.borrowedBooks,
        color: "#0088FE",
      },
      {
        label: "available Books",
        value: statistics.availableBooks,
        color: "#00C49F",
      },
    ]);
    if (!statistics?.booksByDecade) return;
    setBookByDecade({
      xAxis: Object.keys(statistics.booksByDecade),
      data: Object.values(statistics.booksByDecade),
    });
  }, [statistics]);

  return (
    <div>
      <div>
        <p>borrowed/available</p>
        <PieChart
          series={[
            {
              innerRadius: 50,
              outerRadius: 100,
              data: totalAvailableBooks,
              arcLabel: "value",
            },
          ]}
          {...settings}
        />{" "}
      </div>

      <BarChart
        xAxis={[{ data: bookByDecade.xAxis, tickLabelStyle: { fill: "#888" } }]}
        series={[{ data: bookByDecade.data }]}
        height={300}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    readers: state.readers,
    statistics: state.statistics,
    lastUpdated: state.lastUpdated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    calculateStatistic: () => dispatch(calculateStatistic()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

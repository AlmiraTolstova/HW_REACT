import { connect } from "react-redux";
import { PieChart } from "@mui/x-charts/PieChart";
import { calculateStatistic } from "../../redux/actions/bookActions";
import { useEffect, useState } from "react";

function Dashboard({ statistics, calculateStatistic }) {
  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };

  const [totalAvailableBooks, setTotalAvailableBooks] = useState([]);

  useEffect(() => {
    setTotalAvailableBooks([
      {
        label: "totalBooks",
        value: statistics.totalBooks,
        color: "#0088FE",
      },
      {
        label: "availableBooks",
        value: statistics.availableBooks,
        color: "#00C49F",
      },
    ]);
  }, [statistics]);
  return (
    <div>
      <div>
        <p>Total/available</p>
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
        />
      </div>
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

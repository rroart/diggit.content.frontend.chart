import React from "react";

import HorizontalPagination from "../Pagination/HorizontalPagination/HorizontalPagination";
import VerticalPagination from "../Pagination/VerticalPagination/VerticalPagination";
// import TotalSignups from "../../components/TotalSignups/TotalSignups";
import GenderSort from "../GenderSort/GenderSort";
import Meetings from "../Meetings/Meetings";

import funds from "../../assets/icons/funds.svg";
import Group from "../../assets/icons/Group.svg";
import SyncIcon from "../../assets/icons/SyncIcon.svg";
import history from "../../assets/icons/history.svg";
import verificationIcon from "../../assets/icons/verificationIcon.svg";
import lockedPadlock from "../../assets/icons/lockedPadlock.svg";
import { defaults } from 'react-chartjs-2'

import styles from "./MainBoard.module.css";

import Chart from "../Chart/Chart";
import Chart2 from "../Chart/Chart2";

const MainBoard = ({
  individualsData,
  companiesData,
  individuals,
  companies,
  doughnut,
  sort_displayed_gender,
  sort_displayed_type,
  sort_displayed_value,
  v_current,
  h_currentPage,
  v_onPageChange,
  h_onPageChange,
  onDoughnutLenght,
  sort_handleClickGender,
  sort_handleClickType,
}) => {
  const v_icons = [
    { id: 1, url: Group },
    { id: 2, url: funds },
    { id: 3, url: SyncIcon },
    { id: 4, url: history },
    { id: 5, url: verificationIcon },
    { id: 6, url: lockedPadlock },
  ];

  const h_pages = [
    { id: 1, name: "Signups" },
    { id: 2, name: "Investment" },
    { id: 3, name: "Revenue" },
    { id: 4, name: "Exits" },
    { id: 5, name: "Trades" },
  ];

  const sort_select_gender = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ];
  const sort_select_type = [
    { id: 1, name: "Individuals" },
    { id: 2, name: "Companies" },
  ];

const data = (canvas) => {
    defaults.global.defaultFontFamily = 'Montserrat';
    defaults.global.defaultFontStyle = 'bold';
    const context = canvas.getContext("2d");
    var gradient = context.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, 'rgba(27,191,228,1)');
    gradient.addColorStop(1, 'rgba(27,191,228,0)');   

    return {
  labels: ["Jun '19", "Jul '19", "Aug '19", "Sep '19", "Oct '19", "Nov '19", "Dec '19"],
  datasets: [
    {
      label: 'Individuals',
      fill: true,
      backgroundColor: gradient,
      lineTension: 0.5,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [8, 1, 3, 0, 0.5, 0, 10],
      stepSize: 3
    }
  ]
  }
} ;

const data2 = [
  {
      name: "Jun '19", uv: 5
  },
  {
      name: "Jul '19", uv: 1
  },
  {
      name: "Aug '19", uv: 9
  },
  {
      name: "Sep '19", uv: 6
  },
  {
      name: "Oct '19", uv: 7
  },
  {
      name: "Nov '19", uv: 0.1
  },
  {
      name: "Dec '19", uv: 8
  },
];

    const defs = () => {
	return (
	    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f853e7" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#f853e7" stopOpacity={0}/>
	    </linearGradient>
	); };
    
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainBoard}>
        <div className={styles.verticalWrapper}>
          <VerticalPagination
            pages={v_icons}
            currentPage={v_current}
            onPageChange={(icon_id) =>
              v_onPageChange(icon_id)
            }
          />
        </div>
        <div className={styles.board}>
          <HorizontalPagination
            pages={h_pages}
            currentPage={h_currentPage}
            onPageChange={(page) => h_onPageChange(page)}
          />
          <div className={styles.display}>
            <div className={styles.displayCharts}>
              <div className={styles.upperChart}>
		<Chart data={data} />
                {/* Individuals Chart */}
                {/* Required data: individuals */}
              </div>
              <div className={styles.lowerChart}>
		<Chart2 data={data2} name="Companies" defs={defs()} />
                {/* Companies Chart */}
                {/* Required data: companies */}
              </div>
            </div>
            <div className={styles.displayInfo}>

              <div className={styles.sort}>
                <GenderSort
                  selectGender={sort_select_gender}
                  selectType={sort_select_type}
                  displayedGender={sort_displayed_gender}
                  displayedType={sort_displayed_type}
                  displayedValue={sort_displayed_value}
                  onClickGender={(
                    displayedGender,
                    displayedId
                  ) =>
                    sort_handleClickGender(
                      displayedGender,
                      displayedId
                    )
                  }
                  onClickType={(
                    displayedType,
                    displayedId
                  ) =>
                    sort_handleClickType(
                      displayedType,
                      displayedId
                    )
                  }
                />
              </div>

              <div className={styles.meetings}>
                <Meetings
                  individuals={individualsData}
                  companies={companiesData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;

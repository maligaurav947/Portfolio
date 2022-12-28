import { MDBContainer } from "mdb-react-ui-kit";
import GitHubCalendar from "react-github-calendar";
import React from "react";

function GithubCont() {
  return (
    <div className="mt-5">
      <h1 className="text-center mb-5 mt-5">GitHub Contributions Calendar</h1>
      <div
        className="pb-2 pt-2 d-grid align-items-center justify-content-center bg-dark"
        style={{
          height: "40vh",
        }}
      >
        <MDBContainer className="text-light">
          <GitHubCalendar
            username="maligaurav947"
            transformData={selectLastHalfYear}
            hideColorLegend={false}
            hideTotalCount={false}
            blockSize={18}
            showWeekdayLabels={true}
          />
        </MDBContainer>
      </div>
    </div>
  );
}

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 12;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

export default GithubCont;

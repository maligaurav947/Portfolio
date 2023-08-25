import GitHubCalendar from "react-github-calendar";
import React from "react";

function GithubData() {
  return (
    <section className="hidden lg:grid lg:mt-5">
      <h1 className="text-[1.6rem] lg:text-4xl font-main text-center mb-2">
        Days I Code
      </h1>
      <div
        className="grid place-content-center"
        style={{
          height: "40vh",
        }}
      >
        <div className="text-light">
          <GitHubCalendar
            username="maligaurav947"
            transformData={selectLastHalfYear}
            hideColorLegend={false}
            blockSize={20}
            hideTotalCount={false}
            showWeekdayLabels={true}
          />
        </div>
      </div>
    </section>
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

export default GithubData;

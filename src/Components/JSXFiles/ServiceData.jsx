import { RxDimensions, RxFrame, RxBorderSplit } from "react-icons/rx";
const ServiceData = [
  {
    title: "Website Design and Development",
    info: "This is the core service where you create visually appealing and functional websites using HTML, CSS, and JavaScript. Clients are always looking for professional-looking websites that reflect their brand and engage their target audience. By mastering this service, you can cater to a wide range of clients who need an online presence.",
    icon: (
      <>
        <RxFrame />
      </>
    ),
  },
  {
    title: "Mobile Optimization",
    info: "With the increasing use of mobile devices, responsive design has become essential. Being able to create websites that look and function well on various screen sizes will set you apart. Mobile optimization ensures a seamless user experience on smartphones and tablets, which is crucial for user satisfaction ",

    icon: (
      <>
        <RxDimensions />
      </>
    ),
  },
  {
    title: "Frontend Frameworks",
    info: "Proficiency in popular frontend frameworks like React, Angular, or Vue.js allows you to create dynamic and interactive user interfaces. SPAs offer a smoother experience by loading content dynamically without the need for full page reloads. This service is particularly valuable for clients who want modern, engaging web applications.",

    icon: (
      <>
        <RxBorderSplit />
      </>
    ),
  },
];

export default ServiceData;

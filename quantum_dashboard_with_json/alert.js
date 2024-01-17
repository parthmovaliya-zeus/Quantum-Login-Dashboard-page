const alertData = [
    {
        title: "License for Introduction to Algebra has been assigned to your school",
        subTopicTitle: "",
        subTitle: "",
        isSubtitle: false,
        date: "15-Sep-2018",
        time: "07:21 pm",
        isDnd: true
    },
    {
        title: "Lesson 3 Practice Worksheet overdue for Amy Santiago",
        subTopicTitle: "",
        subTitle: "",
        isSubtitle: false,
        date: "15-Sep-2018",
        time: "05:21 pm",
        isDnd: false
    },
    {
        title: "23 new students created",
        subTopicTitle: "",
        subTitle: "",
        isSubtitle: false,
        date: "14-Sep-2018",
        time: "01:21 pm",
        isDnd: true
    },
    {
        title: "15 submissions ready for evaluation",
        subTopicTitle: "Class:",
        subTitle: "Basics of Algebra",
        isSubtitle: true,
        date: "13-Sep-2018",
        time: "01:15 pm",
        isDnd: true
    },
    {
        title: "License for Basic Concepts in Geometry has been assigned to your... school",
        subTopicTitle: "",
        subTitle: "",
        isSubtitle: false,
        date: "15-Sep-2018",
        time: "07:21 pm",
        isDnd: true
    },
    {
        title: "Lesson 3 Practice Worksheet overdue for Sam Diego",
        subTopicTitle: "Course:",
        subTitle: "Advanced Mathematics",
        isSubtitle: true,
        date: "15-Sep-2018",
        time: "07:21 pm",
        isDnd: false
    },
]

const alertIcon = document.querySelector(".alerts");
const clickAlert = document.querySelector(".alerts>img");
const alertNotificationCount = document.querySelector("#alertNotificationCount");
const alertNotifications = document.querySelector(".alertNotifications");
const displayAlertNotifications = document.querySelector(".displayAlertNotifications");

alertData.forEach(data => {
    const singleNotification = document.createElement("div");
    singleNotification.classList.add("singleNotification");

    const jsTemp = `
    <div class="alertTitleContainer">
        <div class="notificationTitle">
            ${data.title}
        </div>
      ${data.isDnd ?
            '<img src="../assets/icons/dnd.png" alt="dnd icon" />'
            :
            '<img src="../assets/icons/correct.png" alt="correct icon" />'
        }
    </div>
    
    <div class="${data.isSubtitle ? 'notificationSubTitle' : 'displayNone'}">${data.subTopicTitle} <span class='alertSubTopic'>${data.subTitle}</span></div>

    <div class="alertDateTime">
      <div class="">${data.date} at ${data.time}</div>
    </div>
    `;
    if (data.isDnd) {
        singleNotification.classList.add("dndNotification")
    }
    singleNotification.innerHTML = jsTemp;
    displayAlertNotifications.appendChild(singleNotification)
});

let isClickedAlertIcon = false;

clickAlert.addEventListener("click", () => {
    if (isClickedAlertIcon) {
        isClickedAlertIcon = false;
        alertIcon.classList.remove("showDropDownContent");
        alertNotificationCount.classList.remove("displayNone")
    } else {
        isClickedAlertIcon = true;
        alertIcon.classList.add("showDropDownContent")
        alertNotificationCount.classList.add("displayNone")
    }
});
alertIcon.addEventListener("mouseenter", () => {
    alertIcon.classList.add("showDropDownContent")
    alertNotificationCount.classList.add("displayNone")
});
alertIcon.addEventListener("mouseleave", () => {
    alertIcon.classList.remove("showDropDownContent")
    alertNotificationCount.classList.remove("displayNone")
});
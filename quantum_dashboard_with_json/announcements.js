const announcementsData = [
    {
        owner: "PA: Wilson Kumar",
        title: "No classes will be held on 21st Nov",
        subTitle: "",
        isSubtitle: false,
        isFileAttached: true,
        numberOfFiles: 2,
        date: "15-Sep-2018",
        time: "07:21 pm",
        isDnd: false
    },
    {
        owner: "PA: Samson White",
        title: "Guest lecture on Geometry on 20th September",
        subTitle: "",
        isSubtitle: false,
        isFileAttached: true,
        numberOfFiles: 2,
        date: "15-Sep-2018",
        time: "07:21 pm",
        isDnd: true
    },
    {
        owner: "PA: Wilson Kumar",
        title: "Additional course materials available on request",
        subTitle: "Course: Mathematics 101",
        isSubtitle: true,
        isFileAttached: false,
        numberOfFiles: 0,
        date: "15-Sep-2018",
        time: "07:21 pm",
        isDnd: false
    },
    {
        owner: "PA: Wilson Kumar",
        title: "No classes will be held on 25th Dec",
        subTitle: "",
        isSubtitle: false,
        isFileAttached: false,
        numberOfFiles: 0,
        date: "15-Sep-2018",
        time: "07:21 pm",
        isDnd: true
    },
    {
        owner: "PA: Wilson Kumar",
        title: "Additional course materials available on request",
        subTitle: "Course: Mathematics 101",
        isSubtitle: true,
        isFileAttached: false,
        numberOfFiles: 0,
        date: "15-Sep-2018",
        time: "07:21 pm",
        isDnd: true
    },
]

const announcementsIcon = document.querySelector(".announcements");
const clickAnnouncements = document.querySelector(".announcements > img");
const announcementsNotifications = document.querySelector(".announcementsNotifications");
const displayAnnouncementsNotifications = document.querySelector(".displayAnnouncementsNotifications");
const announcementsNotificationCount = document.querySelector("#announcementsNotificationCount");

announcementsData.forEach(data => {
    const singleNotification = document.createElement("div");
    singleNotification.classList.add("singleNotification");

    const jsTemp = `
    <div class="notificationOwner">
      <div class="">${data.owner}</div>
      ${data.isDnd ?
            '<img src="../assets/icons/dnd.png" alt="dnd icon" />'
            :
            '<img src="../assets/icons/correct.png" alt="correct icon" />'
        }
    </div>
    <div class="notificationTitle">
      ${data.title}
    </div>

    <div class="${data.isSubtitle ? 'notificationSubTitle' : 'displayNone'}">${data.subTitle}</div>

    <div class="notificationFileAndDateTime">
      <div class="">
        <div class="${data.isFileAttached ? '' : 'opacity0'}">
            <i class="fa-light fa-paperclip"></i>
            <span class="">${data.numberOfFiles} files are attached</span>
        </div>
      </div>
      <div class="">${data.date} at ${data.time}</div>
    </div>
    `;
    if (data.isDnd) {
        singleNotification.classList.add("dndNotification")
    }
    singleNotification.innerHTML = jsTemp;
    displayAnnouncementsNotifications.appendChild(singleNotification)
});

let isClickedAnnouncementIcon = false;

clickAnnouncements.addEventListener("click", () => {
    if (isClickedAnnouncementIcon) {
        isClickedAnnouncementIcon = false;
        announcementsIcon.classList.remove("showDropDownContent");
        announcementsNotificationCount.classList.remove("displayNone");
    } else {
        isClickedAnnouncementIcon = true;
        announcementsIcon.classList.add("showDropDownContent")
        announcementsNotificationCount.classList.add("displayNone");
    }
});
announcementsIcon.addEventListener("mouseenter", () => {
    announcementsIcon.classList.add("showDropDownContent")
    announcementsNotificationCount.classList.add("displayNone");
});
announcementsIcon.addEventListener("mouseleave", () => {
    announcementsIcon.classList.remove("showDropDownContent")
    announcementsNotificationCount.classList.remove("displayNone");
});


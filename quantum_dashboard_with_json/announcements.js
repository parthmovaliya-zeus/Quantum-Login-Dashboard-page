const announcementsData = [
    {
        owner: "PA: Wilson Kumar",
        title: "No classes will be held on 21st Nov",
        subTitle: "",
        isSubtitle: true,
        isFileAttached: true,
        numberOfFiles: 2,
        date: "15-Sep-2018",
        time: "07:21 pm",
        isDnd: false
    }
]

const announcementsIcon = document.querySelector(".announcements");
const announcementsNotifications = document.querySelector(".announcementsNotifications");

announcementsData.forEach(data => {
    const singleNotification = document.querySelector(".singleNotification");
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
    ${data.isSubtitle ?
            <div class="notificationSubTitle">${data.subTitle}</div>
            : ""}
    <div class="notificationFileAndDateTime">
      <div class="">
        <i class="fa-light fa-paperclip"></i>
        <span class="">${data.numberOfFiles} files are attached</span>
      </div>
      <div class="">${data.date} at ${data.time}</div>
    </div>
    `;
    singleNotification.innerHTML = jsTemp;
    announcementsNotifications.appendChild(singleNotification)
})


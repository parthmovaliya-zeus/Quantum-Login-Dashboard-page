const topicNames = {
    units: "Units",
    lessons: "Lessons",
    topics: "Topics"
}

const windowWidth = window.innerWidth;
let trimCount;
if (windowWidth < 769) {
    trimCount = 89;
} else {
    trimCount = 59;
}


const icons = {
    favouriteIcon: {
        src: "../assets/quantum screen assets/icons/favourite.svg",
        alt: "favourite icon"
    },
    arrowDownIcon: {
        src: "../assets/quantum screen assets/icons/arrow-down.svg",
        alt: "arrow down search icon"
    },
}

statisticsIconsPath = {
    preview: {
        src: "../assets/quantum screen assets/icons/preview.svg",
        alt: "preview icon"
    },
    manageCourse: {
        src: "../assets/quantum screen assets/icons/manage course.svg",
        alt: "manage course icon"
    },
    gradeSubmissions: {
        src: "../assets/quantum screen assets/icons/grade submissions.svg",
        alt: "grade submissions icon"
    },
    reports: {
        src: "../assets/quantum screen assets/icons/reports.svg",
        alt: "reports icon"
    },
}

const card_data = [
    {
        isExpired: false,
        imageSrc: "../assets/quantum screen assets/images/imageMask.png",
        imageAlt: "Acceleration course image",
        name: "Acceleration",
        isFavourite: true,
        subject: "Physics",
        grade: "Grade 7+2",
        isTopicAvailable: true,
        units: 4,
        lessons: 18,
        topics: 24,
        isClass: true,
        teacher: "Mr. Frank's Class B",
        students: "50 Students",
        date: "21-Jan-2020 - 21-Aug-2020",
        statisticsIcons: {
            preview: {
                isAvailable: true
            },
            manageCourse: {
                isAvailable: true
            },
            gradeSubmissions: {
                isAvailable: true
            },
            reports: {
                isAvailable: true
            },
        },
    },
    {
        isExpired: false,
        imageSrc: "../assets/quantum screen assets/images/imageMask-1.png",
        imageAlt: "Displacement, Velocity and Speed course image",
        name: "Displacement, Velocity and Speed",
        isFavourite: true,
        subject: "Physics",
        grade: "Grade 6+3",
        isTopicAvailable: true,
        units: 2,
        lessons: 15,
        topics: 20,
        isClass: false,
        teacher: "",
        students: "",
        date: "",
        statisticsIcons: {
            preview: {
                isAvailable: true
            },
            manageCourse: {
                isAvailable: false
            },
            gradeSubmissions: {
                isAvailable: false
            },
            reports: {
                isAvailable: true
            },
        },
    },
    {
        isExpired: false,
        imageSrc: "../assets/quantum screen assets/images/imageMask-3.png",
        imageAlt: "Biology course image",
        name: "Introduction to Biology: Micro organisms and how they affect the other Life Systems in English",
        isFavourite: true,
        subject: "Biology",
        grade: "Grade 4+1",
        isTopicAvailable: true,
        units: 5,
        lessons: 16,
        topics: 22,
        isClass: true,
        teacher: "All Classes",
        students: "300 Students",
        date: "",
        statisticsIcons: {
            preview: {
                isAvailable: true
            },
            manageCourse: {
                isAvailable: false
            },
            gradeSubmissions: {
                isAvailable: false
            },
            reports: {
                isAvailable: true
            },
        },
    },
    {
        isExpired: true,
        imageSrc: "../assets/quantum screen assets/images/imageMask-2.png",
        imageAlt: "High School Mathematics course image",
        name: "Introduction to High School Mathematics",
        isFavourite: false,
        subject: "Mathematics",
        grade: "Grade 8+3",
        isTopicAvailable: false,
        units: 0,
        lessons: 0,
        topics: 0,
        isClass: true,
        teacher: "Mr. Frank's Class A",
        students: "44 Students",
        date: "14-Oct-2019 - 20-Oct-2020",
        statisticsIcons: {
            preview: {
                isAvailable: true
            },
            manageCourse: {
                isAvailable: true
            },
            gradeSubmissions: {
                isAvailable: true
            },
            reports: {
                isAvailable: true
            },
        },
    },
]

const course_container = document.querySelector(".div--course-container");

card_data.forEach((card) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("div--course-card");

    const expiredTag = document.createElement("div");
    if (card.isExpired) {
        expiredTag.classList.add("div--course-expired");
        expiredTag.innerText = "EXPIRED"
        cardContainer.appendChild(expiredTag);
    }

    const cardContainerTop = document.createElement("div");
    cardContainerTop.classList.add("course-card-top");

    const courseImg = document.createElement("img");
    courseImg.src = card.imageSrc;
    courseImg.alt = card.imageAlt;
    courseImg.classList.add("img--course");

    const courseInfo = document.createElement("div");
    courseInfo.classList.add("div--course-info");

    const courseFlexCol = document.createElement("div");
    courseFlexCol.classList.add("course--flex-col");

    const courseName = document.createElement("div");
    courseName.classList.add("course--name");

    const name = document.createElement("span");
    let trimName;
    if (card.name.length < trimCount) {
        trimName = card.name;
    } else {
        trimName = card.name.substring(0, trimCount) + "...";
    }
    name.innerHTML = `<strong>${trimName}</strong>`;

    const courseIsFavourite = document.createElement("img");
    courseIsFavourite.src = icons.favouriteIcon.src;
    courseIsFavourite.alt = icons.favouriteIcon.alt;

    if (!card.isFavourite) {
        courseIsFavourite.classList.add("img--not-favourite")
    }

    courseName.appendChild(name)
    courseName.appendChild(courseIsFavourite)

    const courseExtraInfo = document.createElement("div");
    courseExtraInfo.classList.add("course-extra-info");

    const subject = document.createElement("div");
    subject.innerText = card.subject;

    const divSplitter = document.createElement("div");
    divSplitter.classList.add("splitter");

    const grade = document.createElement("div");
    grade.innerText = card.grade;

    courseExtraInfo.appendChild(subject);
    courseExtraInfo.appendChild(divSplitter);
    courseExtraInfo.appendChild(grade);

    const topicInfo = document.createElement("div");
    topicInfo.classList.add("course-topic-info");

    courseFlexCol.appendChild(courseName)
    courseFlexCol.appendChild(courseExtraInfo)

    const classInfo = document.createElement("div");

    if (card.isTopicAvailable) {
        for (let topicName in topicNames) {
            const topic = document.createElement("div");

            const cardKey = card[topicName];
            const topicNameValue = topicNames[topicName];

            topic.innerHTML = `<strong>${cardKey}</strong> ${topicNameValue}`

            topicInfo.appendChild(topic)
        }
        courseFlexCol.appendChild(topicInfo)
    } else {
        classInfo.classList.add("mt-16");
    }

    classInfo.classList.add("course--class-info");

    if (!card.isClass) {
        classInfo.classList.add("course--class-info-noClasses");
    }

    const teacher = document.createElement("div");
    if (card.isClass) {
        teacher.innerText = card.teacher;
    } else {
        teacher.innerText = "No Classes";
    }

    const dropDown = document.createElement("img");
    dropDown.src = icons.arrowDownIcon.src;
    dropDown.alt = icons.arrowDownIcon.alt;

    classInfo.appendChild(teacher)
    classInfo.appendChild(dropDown)

    const classDateInfo = document.createElement("div");
    classDateInfo.classList.add("course--date-info");

    courseInfo.appendChild(courseFlexCol);
    courseInfo.appendChild(classInfo);

    if (card.isClass) {
        const classDateInfoStudents = document.createElement("div");
        classDateInfoStudents.innerText = card.students;

        const splitter = document.createElement("div");
        splitter.classList.add("splitter");

        const classDateInfoDate = document.createElement("div");
        classDateInfoDate.innerText = card.date;

        classDateInfo.appendChild(classDateInfoStudents)
        if (card.date !== "") {
            classDateInfo.appendChild(splitter)
        }
        classDateInfo.appendChild(classDateInfoDate)

        courseInfo.appendChild(classDateInfo);
    }

    cardContainerTop.appendChild(courseImg);
    cardContainerTop.appendChild(courseInfo);

    const courseStatistics = document.createElement("div");
    courseStatistics.classList.add("course--statistics-icons");

    for (icon in statisticsIconsPath) {
        const sIcon = document.createElement("img");
        sIcon.src = statisticsIconsPath[icon].src;
        sIcon.alt = statisticsIconsPath[icon].alt;

        if (!card.statisticsIcons[icon].isAvailable) {
            sIcon.classList.add("icon--color-light")
        }

        courseStatistics.appendChild(sIcon)

    }

    cardContainer.appendChild(cardContainerTop);
    cardContainer.appendChild(courseStatistics);

    course_container.appendChild(cardContainer);

})

// using JavaScript’s Template
// card_data.forEach((card) => {
//     let trimName;
//     if (card.name.length < trimCount) {
//         trimName = card.name;
//     } else {
//         trimName = card.name.substring(0, trimCount) + "...";
//     }
//     const cardContainer = document.createElement("div");
//     cardContainer.classList.add("div--course-card");
//     const oneCard = `
//     <div class="div--course-card">
//           <div class="course-card-top">
//             <img
//               class="img--course"
//               src="${card.imageSrc}"
//               alt="${card.imageAlt}"
//             />
//             <div class="div--course-info">
//               <div class="course--flex-col">
//                 <div class="course--name">
//                   <strong class="">${trimName}</strong>
//                   <img
//                     class='${card.isFavourite ? "" : "img--not-favourite"}'
//                     src="${icons.favouriteIcon.src}"
//                     alt="${icons.favouriteIcon.alt}"
//                   />
//                 </div>
//                 <div class="course-extra-info">
//                   <div class="">${card.subject}</div>
//                   <div class="splitter"></div>
//                   <div class="">${card.grade}</div>
//                 </div>

//                 ${card.isTopicAvailable ? `
//                 <div class="course-topic-info">
//                 <div class=""><strong>${card.units}</strong> Units</div>
//                 <div class=""><strong>${card.lessons}</strong> Lessons</div>
//                 <div class=""><strong>${card.topics}</strong> Topics</div>
//               </div>
//                 ` : ""}

//               </div>
//               <div class="course--class-info ${card.isTopicAvailable ? '' : 'mt-16'}">
//               ${card.isClass ? `<strong class="">${card.teacher}</strong>` : `<strong class="course--class-info-noClasses">No Class</strong>`}
                
//                 <img
//                   class=""
//                   src="../assets/quantum screen assets/icons/arrow-down.svg"
//                   alt="arrow down search icon"
//                 />
//               </div>
//               <div class="course--date-info">
//                 <div class="">${card.students}</div>
//                 ${card.date.length === 0 ? "" : `<div class="splitter"></div>`}
//                 <div class="">${card.date}</div>
//               </div>
//             </div>
//           </div>
//           <div class="course--statistics-icons">
//             <img class='${card.statisticsIcons.preview.isAvailable ? "" : "icon--color-light"}'
//               src="../assets/quantum screen assets/icons/preview.svg"
//               alt="preview icon"
//             />
//             <img class='${card.statisticsIcons.manageCourse.isAvailable ? "" : "icon--color-light"}'
//               src="../assets/quantum screen assets/icons/manage course.svg"
//               alt="manage course icon"
//             />
//             <img class='${card.statisticsIcons.gradeSubmissions.isAvailable ? "" : "icon--color-light"}'
//               src="../assets/quantum screen assets/icons/grade submissions.svg"
//               alt="grade submissions icon"
//             />
//             <img class='${card.statisticsIcons.reports.isAvailable ? "" : "icon--color-light"}'
//               src="../assets/quantum screen assets/icons/reports.svg"
//               alt="reports icon"
//             />
//           </div>
//         </div>
//     `
//     cardContainer.innerHTML = oneCard;
//     course_container.appendChild(cardContainer);
// })
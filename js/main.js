// Remember to Run Server.
// console.log(`If you can see this message, JavaScript is working :)`);
// console.log(`Defer is working if '${document.body}' is not NULL!`);

// ----------------------------------------------------------------------------------------------------
// About Me
// ----------------------------------------------------------------------------------------------------
// Add About Me Content.
function addAbout(json) {
  // Get Section by ID.
  let tempSection = document.getElementById("about");

  // 2 subsections.
  let tempElement, section1, section2;

  // ----------------------------------------------------------------------------------------------------
  // Section 1: About Me.
  section1 = document.createElement("div");
  section1.className =
    "col-lg-6 col-md-7 col-sm-10 col-12 order-md-1 order-2 py-2 px-4";

  // Welcome message.
  tempElement = document.createElement("h2");
  tempElement.textContent = json.about.welcomeMsg;
  section1.appendChild(tempElement);

  // Name message.
  tempElement = document.createElement("h1");
  tempElement.innerHTML = `I am <strong>${json.about.lastName}</strong> ${json.about.firstName}`;
  section1.appendChild(tempElement);

  // Title.
  tempElement = document.createElement("p");
  tempElement.className = "h6";
  tempElement.textContent = json.about.title;
  section1.appendChild(tempElement);

  // Summary.
  tempElement = document.createElement("p");
  tempElement.textContent = json.about.summary;
  section1.appendChild(tempElement);

  // Add Section 1 to main section.
  tempSection.appendChild(section1);

  // ----------------------------------------------------------------------------------------------------
  // Section 2: Portrait.
  section2 = document.createElement("div");
  section2.className =
    "col-lg-3 col-md-4 col-sm-6 col-7 order-md-2 order-1 p-2";

  tempElement = document.createElement("img");
  tempElement.className = "rounded-pill img-fluid w-100";
  tempElement.setAttribute("src", json.about.image);
  tempElement.setAttribute("alt", json.about.firstName);
  section2.appendChild(tempElement);

  // Add Section 2 to main section.
  tempSection.appendChild(section2);
  // console.log(`Added About Me Content!`);
  return;
}

// Fetch About Me Content.
fetch("./js/info/about.json")
  .then((response) => response.json())
  .then(addAbout);

// ----------------------------------------------------------------------------------------------------
// Education
// ----------------------------------------------------------------------------------------------------
// Add Education Content.
function addEducation(json) {
  // Get Section by ID.
  let tempSection = document.getElementById("education");

  // 2 subsections.
  let tempElement, section1, section2;

  // ----------------------------------------------------------------------------------------------------
  // Section 1: Title.
  section1 = document.createElement("div");
  section1.className = "col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-4";

  tempElement = document.createElement("h2");
  tempElement.textContent = "Education:";
  section1.appendChild(tempElement);

  // Add Section 1 to main section.
  tempSection.appendChild(section1);

  // ----------------------------------------------------------------------------------------------------
  // Section 2: List of Education.
  // Extra Elements.
  let tempCard, tempBody, tempDiv;
  // Repeat Card Creation.
  json.education.forEach((item, index) => {
    section2 = document.createElement("div");
    section2.className = "col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-3";

    tempCard = document.createElement("div");
    tempCard.className = "card shadow-sm";

    tempBody = document.createElement("div");
    tempBody.className = "card-body";

    // Div For School and Year of Study.
    tempDiv = document.createElement("div");
    tempDiv.className = "row p-0 m-0 d-flex justify-content-between";

    // School with link.
    tempElement = document.createElement("a");
    tempElement.className = "h6 col-8 p-0 text-decoration-none";
    tempElement.setAttribute("href", item.externalLink);
    tempElement.setAttribute("target", "_blank");
    tempElement.textContent = item.school;
    tempDiv.appendChild(tempElement);

    // Year of Study.
    tempElement = document.createElement("p");
    tempElement.className = "h6 col-4 p-0 text-end";
    tempElement.textContent = `${item.startDate} - ${item.endDate}`;
    tempDiv.appendChild(tempElement);

    // Add Div to Card Body.
    tempBody.appendChild(tempDiv);

    tempElement = document.createElement("p");
    tempElement.className = "h5";
    tempElement.textContent = item.degree;
    tempBody.appendChild(tempElement);

    // Button to Collapse Description.
    tempElement = document.createElement("button");
    tempElement.className = "btn btn-primary";
    tempElement.setAttribute("type", "button");
    tempElement.setAttribute("data-bs-toggle", "collapse");
    tempElement.setAttribute("data-bs-target", `#educationDesc${index}`);
    tempElement.innerHTML = `View Description <i class="fa-sharp fa-solid fa-caret-down"></i>`;
    tempBody.appendChild(tempElement);

    // Collapsible Div for Description.
    tempDiv = document.createElement("div");
    tempDiv.className = "collapse mt-2";
    tempDiv.id = `educationDesc${index}`;

    // Multiline Description.
    tempElement = document.createElement("p");
    tempElement.className = "p-1 m-0 multiline";
    tempElement.textContent = item.description;
    tempDiv.appendChild(tempElement);

    // Add Div to Card Body.
    tempBody.appendChild(tempDiv);

    // Add Section 2 to main section.
    tempCard.appendChild(tempBody);
    section2.appendChild(tempCard);
    tempSection.appendChild(section2);
  });
  // console.log(`Added Education Content!`);
  return;
}

// Fetch Education Content.
fetch("./js/info/education.json")
  .then((response) => response.json())
  .then(addEducation);

// ----------------------------------------------------------------------------------------------------
// For Bootstrap Popovers.
// ----------------------------------------------------------------------------------------------------
var popoverList = [];

// ----------------------------------------------------------------------------------------------------
// Skills
// ----------------------------------------------------------------------------------------------------
// Add Skills Content.
function addSkill(json) {
  // Get Section by ID.
  let tempSection = document.getElementById("skill");

  // 2 subsections.
  let tempElement, section1, section2;

  // ----------------------------------------------------------------------------------------------------
  // Section 1: Title.
  section1 = document.createElement("div");
  section1.className = "col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-4";

  tempElement = document.createElement("h2");
  tempElement.textContent = "Skills & Knowledge:";
  section1.appendChild(tempElement);

  // Add Section 1 to main section.
  tempSection.appendChild(section1);

  // ----------------------------------------------------------------------------------------------------
  // Section 2: List of Skills.
  section2 = document.createElement("div");
  section2.className = "col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-2";
  tempSection.appendChild(section2);

  // Extra Elements.
  let tempDiv1, nest1, nest2, nest3, nest4;

  // Row.
  tempDiv1 = document.createElement("div");
  tempDiv1.className = "row p-0 m-0 d-flex justify-content-center px-1";
  section2.appendChild(tempDiv1);

  // Repeat Card Creation.
  json.skill.forEach((item) => {
    // Col.
    nest1 = document.createElement("div");
    nest1.className = "col-lg-2 col-md-3 col-sm-4 col-4 p-1";
    tempDiv1.appendChild(nest1);

    // External Link with Popover.
    nest2 = document.createElement("a");
    nest2.className = "text-decoration-none text-body";
    nest2.setAttribute("href", item.externalLink);
    nest2.setAttribute("target", "_blank");
    nest2.setAttribute("title", item.title);
    nest2.setAttribute("data-bs-toggle", "popover");
    nest2.setAttribute("data-bs-trigger", "hover");
    nest2.setAttribute("data-bs-content", item.description);
    nest2.setAttribute("data-bs-placement", "bottom");
    nest1.appendChild(nest2);

    // ----------------------------------------------------------------------------------------------------
    // For Bootstrap Popovers.
    // ----------------------------------------------------------------------------------------------------
    popoverList.push(new bootstrap.Popover(nest2));

    // Card.
    nest3 = document.createElement("div");
    nest3.className = "card shadow-sm text-center h-100";
    nest2.appendChild(nest3);

    // Card Body.
    nest4 = document.createElement("div");
    nest4.className = "card-body";
    nest3.appendChild(nest4);

    // Icon and Short Title.
    tempElement = document.createElement("i");
    tempElement.className = `${item.icon} fs-1 pb-2`;
    nest4.appendChild(tempElement);
    tempElement = document.createElement("p");
    tempElement.className = "h6 m-0";
    tempElement.textContent = item.shortTitle;
    nest4.appendChild(tempElement);
  });

  // console.log("Popover List after Adding Skills Content:\n");
  // console.log(popoverList);
  // console.log(`Added Skills Content!`);
  return;
}

// Fetch Skills Content.
fetch("./js/info/skill.json")
  .then((response) => response.json())
  .then(addSkill);

// ----------------------------------------------------------------------------------------------------
// Projects
// ----------------------------------------------------------------------------------------------------
// Add Projects Content.
function addProject(json) {
  // Get Section by ID.
  let tempSection = document.getElementById("project");

  // 2 subsections.
  let tempElement, section1, section2;

  // ----------------------------------------------------------------------------------------------------
  // Section 1: Title.
  section1 = document.createElement("div");
  section1.className = "col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-4";

  tempElement = document.createElement("h2");
  tempElement.textContent = "Featured Projects:";
  section1.appendChild(tempElement);

  // Add Section 1 to main section.
  tempSection.appendChild(section1);

  // ----------------------------------------------------------------------------------------------------
  // Section 2: List of Projects.
  section2 = document.createElement("div");
  section2.className = "col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-2";
  tempSection.appendChild(section2);

  // Extra Elements.
  let tempDiv1, nest1, nest2, nest3, nest4;

  // Row.
  tempDiv1 = document.createElement("div");
  tempDiv1.className = "row p-0 m-0 d-flex justify-content-center px-1";
  section2.appendChild(tempDiv1);

  // Repeat Card Creation.
  json.project.forEach((item) => {
    // Col.
    nest1 = document.createElement("div");
    nest1.className = "col-md-4 col-sm-6 p-1 d-flex align-items-stretch";
    tempDiv1.appendChild(nest1);

    // Card.
    nest2 = document.createElement("div");
    nest2.className = "card shadow-sm text-center w-100";
    nest1.appendChild(nest2);

    // Outer Image Container.
    nest3 = document.createElement("div");
    nest3.className =
      "card-img-top text-start d-block mx-auto w-50 p-1 mt-3 shadow rounded";
    nest2.appendChild(nest3);

    // Image Container.
    nest4 = document.createElement("div");
    nest4.className = "img-container rounded";
    nest3.appendChild(nest4);

    // Card Image.
    tempElement = document.createElement("img");
    tempElement.setAttribute("src", item.image);
    tempElement.setAttribute("alt", item.title);
    nest4.appendChild(tempElement);

    // Card Body.
    nest3 = document.createElement("div");
    nest3.className = "card-body d-flex flex-column justify-content-center";
    nest2.appendChild(nest3);

    // Badge div.
    nest4 = document.createElement("div");
    nest4.className = "mb-1";
    nest3.appendChild(nest4);

    // Badge.
    item.badge.forEach((badge) => {
      tempElement = document.createElement("span");
      tempElement.className = `${badge.bsClass} me-1`;
      tempElement.textContent = badge.title;
      nest4.appendChild(tempElement);
    });

    // Project Title.
    tempElement = document.createElement("p");
    tempElement.className = "h6";
    tempElement.textContent = item.title;
    nest3.appendChild(tempElement);

    // Project Description.
    tempElement = document.createElement("p");
    tempElement.className = "small";
    tempElement.textContent = item.description;
    nest3.appendChild(tempElement);

    // Button to external link.
    tempElement = document.createElement("a");

    // Check if the link is public.
    if (item.isPublic) {
      tempElement.className =
        "btn btn-primary mt-auto mx-auto align-self-start";
      tempElement.setAttribute("href", item.externalLink);
      tempElement.setAttribute("target", "_blank");
      tempElement.innerHTML = `View on GitHub <i class="fa-brands fa-github"></i>`;
    } else {
      tempElement.className =
        "btn btn-secondary mt-auto mx-auto align-self-start";
      tempElement.innerHTML = `Private Project <i class="fa-brands fa-github"></i>`;
    }
    nest3.appendChild(tempElement);
  });

  // console.log(`Added Projects Content!`);
  return;
}

// Fetch Projects Content.
fetch("./js/info/project.json")
  .then((response) => response.json())
  .then(addProject);

// ----------------------------------------------------------------------------------------------------
// Work Experience
// ----------------------------------------------------------------------------------------------------
// Add Work Experience Content.
function addExperience(json) {
  // Get Section by ID.
  let tempSection = document.getElementById("experience");

  // 2 subsections.
  let tempElement, section1, section2;

  // ----------------------------------------------------------------------------------------------------
  // Section 1: Title.
  section1 = document.createElement("div");
  section1.className = "col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-4";

  tempElement = document.createElement("h2");
  tempElement.textContent = "Work Experience:";
  section1.appendChild(tempElement);

  // Add Section 1 to main section.
  tempSection.appendChild(section1);

  // ----------------------------------------------------------------------------------------------------
  // Section 2: List of Work Experience.
  // Extra Elements.
  let tempCard, tempBody, tempDiv;
  // Repeat Card Creation.
  json.experience.forEach((item, index) => {
    section2 = document.createElement("div");
    section2.className = "col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-3";
    // Add Section 2 to main section.
    tempSection.appendChild(section2);

    tempCard = document.createElement("div");
    tempCard.className = "card shadow-sm";
    section2.appendChild(tempCard);

    tempBody = document.createElement("div");
    tempBody.className = "card-body";
    tempCard.appendChild(tempBody);

    // Div For Company and Working Date.
    tempDiv = document.createElement("div");
    tempDiv.className = "row p-0 m-0 d-flex justify-content-between";
    // Add Div to Card Body.
    tempBody.appendChild(tempDiv);

    // Company.
    tempElement = document.createElement("p");
    tempElement.className = "h6 col-7 p-0 mb-2";
    tempElement.textContent = item.company;
    tempDiv.appendChild(tempElement);

    // Working Date.
    tempElement = document.createElement("p");
    tempElement.className = "h6 col-5 p-0 mb-2 text-end";
    tempElement.textContent = `${item.startDate} - ${item.endDate}`;
    tempDiv.appendChild(tempElement);

    // Div For Location and Job Type.
    tempDiv = document.createElement("div");
    tempDiv.className = "row p-0 m-0 d-flex justify-content-between";
    // Add Div to Card Body.
    tempBody.appendChild(tempDiv);

    // Location.
    tempElement = document.createElement("p");
    tempElement.className = "small col-7 p-0 mb-2";
    tempElement.textContent = item.location;
    tempDiv.appendChild(tempElement);

    // Job Type.
    tempElement = document.createElement("p");
    tempElement.className = "h6 col-5 p-0 mb-2 text-end";
    tempElement.textContent = item.type;
    tempDiv.appendChild(tempElement);

    // Job Title.
    tempElement = document.createElement("p");
    tempElement.className = "h5";
    tempElement.textContent = item.title;
    tempBody.appendChild(tempElement);

    // Button to Collapse Description.
    tempElement = document.createElement("button");
    tempElement.className = "btn btn-primary";
    tempElement.setAttribute("type", "button");
    tempElement.setAttribute("data-bs-toggle", "collapse");
    tempElement.setAttribute("data-bs-target", `#experienceDesc${index}`);
    tempElement.innerHTML = `View Description <i class="fa-sharp fa-solid fa-caret-down"></i>`;
    tempBody.appendChild(tempElement);

    // Collapsible Div for Description.
    tempDiv = document.createElement("div");
    tempDiv.className = "collapse mt-2";
    tempDiv.id = `experienceDesc${index}`;
    // Add Div to Card Body.
    tempBody.appendChild(tempDiv);

    // Multiline Description.
    tempElement = document.createElement("p");
    tempElement.className = "p-1 m-0 multiline";
    tempElement.textContent = item.description;
    tempDiv.appendChild(tempElement);
  });
  // console.log(`Added Working Experience Content!`);
  return;
}

// Fetch Work Experience Content.
fetch("./js/info/experience.json")
  .then((response) => response.json())
  .then(addExperience);

// ----------------------------------------------------------------------------------------------------
// Contact
// ----------------------------------------------------------------------------------------------------
// Add Contact Content.
function addContact(json) {
  // Get Section by ID.
  let tempSection = document.getElementById("contact");

  // 2 subsections.
  let tempElement, section1, section2;

  // ----------------------------------------------------------------------------------------------------
  // Section 1: Title.
  section1 = document.createElement("div");
  section1.className = "col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-4";

  tempElement = document.createElement("h2");
  tempElement.textContent = "Contact:";
  section1.appendChild(tempElement);

  // Add Section 1 to main section.
  tempSection.appendChild(section1);

  // ----------------------------------------------------------------------------------------------------
  // Section 2: List of Contact.
  section2 = document.createElement("div");
  section2.className =
    "col-lg-9 col-md-11 col-sm-10 col-8 py-1 px-2 d-flex flex-wrap flex-sm-row flex-column justify-content-between";
  // Add Section 2 to main section.
  tempSection.appendChild(section2);

  // Extra Elements.
  let tempDiv;

  // Repeat Card Creation.
  json.contact.forEach((item) => {
    // Div for contact.
    tempDiv = document.createElement("div");
    tempDiv.className =
      "px-1 py-1 d-flex justify-content-sm-center align-items-center";
    section2.appendChild(tempDiv);

    // Icon.
    tempElement = document.createElement("i");
    tempElement.className = `${item.icon} p-2 bg-info rounded-circle mx-1`;
    tempDiv.appendChild(tempElement);

    // Detail with link.
    tempElement = document.createElement("a");
    tempElement.className = "text-decoration-none mx-1";
    tempElement.setAttribute("href", item.externalLink);
    tempElement.setAttribute("target", "_blank");
    tempElement.textContent = item.detail;
    tempDiv.appendChild(tempElement);
  });
  // console.log(`Added Contact Content!`);
  return;
}

// Fetch Contact Content.
fetch("./js/info/contact.json")
  .then((response) => response.json())
  .then(addContact);

// console.log(`Final Message: End of JS file!`);

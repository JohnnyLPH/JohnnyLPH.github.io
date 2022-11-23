// Remember to Run Server.
console.log(`If you can see this message, JavaScript is working :)`);
console.log(`Defer is working if '${document.body}' is not NULL!`);

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
  section1.className = "col-lg-6 col-md-7 col-sm-10 col-12 order-md-1 order-2 py-2 px-4";
  
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
  tempElement.className = "h6"
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
  section2.className = "col-lg-3 col-md-4 col-sm-6 col-7 order-md-2 order-1 p-2";

  tempElement = document.createElement("img");
  tempElement.className = "rounded-pill img-fluid w-100";
  tempElement.setAttribute("src", json.about.image);
  tempElement.setAttribute("alt", json.about.firstName);
  section2.appendChild(tempElement);

  // Add Section 2 to main section.
  tempSection.appendChild(section2);
  return;
}

// Fetch About Me Content.
fetch("./js/info/about.json")
    .then(response => response.json())
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
  return;
}

// Fetch Education Content.
fetch("./js/info/education.json")
    .then(response => response.json())
    .then(addEducation);

// ----------------------------------------------------------------------------------------------------
// For Bootstrap Popovers.
// ----------------------------------------------------------------------------------------------------
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

console.log(`Final Message: If there is no error above, all contents are inserted successfully!`);

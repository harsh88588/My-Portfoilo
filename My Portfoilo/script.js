var about = document.getElementById("lblAbout");
var skills = document.getElementById("lblSkills");
var projects = document.getElementById("lblProjects");
var contact = document.getElementById("lblContact");
var instaBtn = document.getElementById("socialInsta");
var linkedinBtn = document.getElementById("socialLinkedin");
var gmailBtn = document.getElementById("socialGmail");
var quoteLeftArrow = document.getElementById("quoteLeftArrow");
var quoteRightArrow =  document.getElementById("quoteRightArrow");
var quoteImage = document.getElementById("Author");
var quoteLine = document.getElementById("quoteLine");
var quoteAuthor = document.getElementById("authorName");
var feedbackBtn = document.getElementById("feedbackBtn");
var projectLeftArrow = document.getElementById("leftarrow");
var projectRightArrow = document.getElementById("rightarrow");
var projectImage = document.getElementById("projectImage");
var projectParaOne = document.getElementById("projectPara1");
var projectParaTwo = document.getElementById("projectPara2");
var projectGitPara = document.getElementById("projectGitRedirect");
var projectGitButton = document.getElementById("projectGitButton");
var projectDivImage = document.getElementById("projectImageDiv");
var quoteArrowCount = 0;
var projectArrowCount = 0;

about.addEventListener("click", function navToAbout(){
    var aboutSectionNav = document.getElementById("aboutSection");
    aboutSectionNav.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: "nearest"
    })
})

skills.addEventListener("click", function navToSkills(){
    var skillsSectionNav = document.getElementById("skillsSection");
    skillsSectionNav.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest'
    })
})
projects.addEventListener("click", function navToProjects(){
    var projectsSectionNav = document.getElementById("projectSection");
    projectsSectionNav.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest'
    })
})
contact.addEventListener("click", function navToContact(){
    var contactSectionNav = document.getElementById("contactSection");
    contactSectionNav.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest'
    })
})


feedbackBtn.addEventListener("click", function(e){
    e.preventDefault();

    var feedbackInput = document.getElementById("feedback");
    Email.send({
        SecureToken : "74cecb54-957a-4dd4-99cc-049d8287bca1",
        To : 'harsh.manoj.portfolio@gmail.com',
        From : "harsh.send.feedback@gmail.com",
        Subject : "Reg: Feedback for your Portfolio",
        Body : feedbackInput.value
    }).then(
      message => alert(message)
    );    
}
) 
instaBtn.addEventListener("click", function openInsta(){
    window.open('https://www.instagram.com/', "_newtab");
})
linkedinBtn.addEventListener("click", function openLinkedIn(){
    window.open('https://www.linkedin.com/in/harsh44322/', "_newtab");
})
gmailBtn.addEventListener("click", function openGmail(){
    location.href = "mailto:harsh88588@gmail.com"
})

quoteRightArrow.addEventListener("click", async function moveQuoteRight(){
    var response = await fetch("quote.json");
    var name = await response.json();
    if(quoteArrowCount < name.length-1){
        quoteArrowCount++;
        console.log(quoteArrowCount);
        quoteImage.src = name[quoteArrowCount].image;
        quoteLine.innerHTML = name[quoteArrowCount].quote;
        quoteAuthor.innerHTML = name[quoteArrowCount].author;
    }
})

quoteLeftArrow.addEventListener("click", async function moveQuoteLeft(){
    var response = await fetch("quote.json");
    var name = await response.json();
    if(quoteArrowCount > 0){
        quoteArrowCount--;
        console.log(quoteArrowCount);
        console.log(name[quoteArrowCount].image);
        quoteImage.src = name[quoteArrowCount].image;
        quoteLine.innerHTML = name[quoteArrowCount].quote;
        quoteAuthor.innerHTML = name[quoteArrowCount].author;
    }
})

projectRightArrow.addEventListener("click", async function moveProjectRight(){
    var response = await fetch("project.json");
    var name = await response.json();
    if(projectArrowCount < name.length-1){
        projectArrowCount++;
        projectParaOne.innerHTML = name[projectArrowCount].para1;
        projectParaTwo.innerHTML = name[projectArrowCount].para2;
        projectImage.src = name[projectArrowCount].image;
    }
    // else{
    //     projectParaOne.innerHTML = "" 
    //     projectParaTwo.innerHTML = ""
    //     projectImage.innerHTML = ""
    //     projectGitPara.innerHTML = "For More Projects Please Click Below Button";
    //     projectGitButton.createElement("BUTTON");
    // }
})

projectLeftArrow.addEventListener("click", async function moveProjectLeft(){
    var response = await fetch("project.json");
    var name = await response.json();
    if(projectArrowCount > 0){
        projectArrowCount--;
        projectParaOne.innerHTML = name[projectArrowCount].para1;
        projectParaTwo.innerHTML = name[projectArrowCount].para2;
        projectImage.src = name[projectArrowCount].image;
    }
})

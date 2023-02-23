
// if the screenwidth is below medium do the following 
if (window.innerWidth < 768) {
    //change the layout of the navbar
    $('.logo-and-name-div').attr('class', 'logo-and-name-div col-11');
} else {
    //change the layout of the navbar
    $('.logo-and-name-div').attr('class', 'logo-and-name-div col-4');
}

//change toggled fa-bars to fa-cross
    $('#toggle-fa').on('click', function(event) {
        if (event.target.className == 'fa fa-bars fa-lg') {
            $('#toggle-fa').attr('class', 'fa fa-times fa-lg');
        } else {
            $('#toggle-fa').attr('class', 'fa fa-bars fa-lg');
        }
    })

//toggle navbar dropdown list
$('.fa-lg').on('click', function (event) {
    if (event.target.className == 'fa fa-bars fa-lg') {
        $('.display-toggle').css('display', 'none');
    } else if (event.target.className == 'fa fa-times fa-lg') {
        $('.display-toggle').css('display', 'flex');
    }
})

//email.js for contact form
let userName = '';
$('.user-name').on('input', function(event) {userName = event.target.value});
let userEmail = '';
$('.user-email').on('input', function(event) {userEmail = event.target.value});
let userMessage = '';
$('.user-message').on('input', function(event) {userMessage = event.target.value});

$('.submit-button').on('click', function(event) {
  event.preventDefault();
  alert('Email sent!');
  emailjs.send("service_sm9sfhi","template_o1do94o", {
    user_name: userName,
    user_email: userEmail,
    message: userMessage,
    },'-29jWKGdLoYcM0kno');
})


// display correct section when clicked on the navbar
$('.select-option').on('click', function (event) {
    $('.home').css('display', 'none');
    $('.about').css('display', 'none');
    $('.work').css('display', 'none');
    $('.contact').css('display', 'none');
    $('.display-toggle').css('display', 'none');
    $('#toggle-fa').attr('class', 'fa fa-bars fa-lg');
    $(`.${event.target.dataset.name}`).css('display', 'flex');
});

//append skills to about section plus skills array
const skills = ['HTML', 'CSS', 'Javascript', 'React', 'Bootstrap', 'AJAX', 'JQuery', 'JSON', 'Agile', 'Node.js', 'ES6', 'Git', 'GitHub'];

for (let a = 0; a < skills.length; a++) {
    let span = `<div class="skill-container">
                  <span>${skills[a]}</span>
                </div>`;
    $('#main-skills-container').append(span);     
};

//append projects into work section
for (let b = 0; b < work.length; b++) {
    let project = ``;
    let stack = ``;
    let buttonHTML = ``;

    //create skills container
    for (let c = 0; c < work[b].techStack.length; c++) {
        stack += `<div class="project-skill-container">
                    <span class="project-details-span">${work[b].techStack[c]}</span>
                  </div>`;
    }
    
    if (work[b].title == 'ReadMe Generator') {
        buttonHTML = `<div class="buttons-div pt-4 col-lg-12 col-md-10">
                        <a class="col-12" href=${work[b].gitHubRepoURL}>
                          <button class="gitHub-repo-button p-2">GitHub Repo</button/>
                        </a>
                      </div>`
    } else {
        buttonHTML = `<div class="buttons-div pt-4 col-lg-12 col-md-10">
                          <a class="col-6" href=${work[b].gitHubPagesURL}>
                            <button class="case-study-button p-2">CASE STUDY</button/>
                          </a>
                          <a class="col-6" href=${work[b].gitHubRepoURL}>
                            <button class="gitHub-repo-button p-2">GitHub Repo</button/>
                          </a>
                        </div>`
    }

    project = `<div class="project-container p-5 row">
                      <span class="project-details-title">${work[b].title}</span>
                      <div class="col-lg-8 col-mg-12 img-div">
                        <img src=${work[b].image} alt=${work[b].title}}></img>
                      </div>
                      <div class="project-details col-lg-4 col-md-8 col-sm-10">                        
                        <p class="col-12">${work[b].description}</p>
                        <div class="stack row col-12">
                          ${stack}
                        </div>
                      </div>
                      ${buttonHTML}
                   </div>`

    $('.main-projects-container').append(project);
}





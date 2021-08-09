const projects = [
    {
        number: 1,
        name: "Article-Preview",
        imgLink: "articlepreview.png",
        demo:"https://articlepreview-comp.netlify.app/",
    },
    {
        number: 2,
        name: "Blury-Loading",
        imgLink: "blurryloading.png",
        demo:"https://blurry-loadingimg.netlify.app/",
    },
    {
        number: 3,
        name: "Clock",
        imgLink: "clock.png",
        demo:"https://clock-theme.netlify.app/",
    },
    {
        number: 4,
        name: "Cookies",
        imgLink: "cookies.png",
        demo:"https://cookies-check.netlify.app/",
    },
    {
        number: 5,
        name: "Copy-To-Clipboard",
        imgLink: "copytoclipboard.png",
        demo:"https://copytoboard.netlify.app/",
    },
    {
        number: 6,
        name: "Dad-Jokes",
        imgLink: "dadjokes.png",
        demo:"https://dad-jokesss.netlify.app/",
    },
    {
        number: 7,
        name: "Detect-Browser",
        imgLink: "detectbrowser.png",
        demo:"https://detect-browsers.netlify.app/"
    },
    {
        number: 8,
        name: "Dino-Gaming",
        imgLink: "dinogaming.png",
        demo:"https://dino-gaming.netlify.app/",
    },
    {
        number: 9,
        name: "Drag & Drop",
        imgLink: "draganddrop.png",
        demo:"https://draganddropanimg.netlify.app/",
    },
    {
        number: 10,
        name: "Event-key-code",
        imgLink: "eventkeycode.png",
        demo:"https://eventkeyscode.netlify.app/",
    },
    {
        number: 11,
        name: "Expanding-Card",
        imgLink: "expandingcard.png",
        demo:"https://expandingcrads.netlify.app/",
    },
    {
        number: 12,
        name: "FAQ",
        imgLink: "faq.png",
        demo:"https://accordionfaq.netlify.app/",
    },
    {
        number: 13,
        name: "Feedback",
        imgLink: "feedbackuidesign.png",
        demo:"https://users-feedback.netlify.app/",
    }, 
    {
        number: 14,
        name: "Google-Search",
        imgLink: "googlesearch.png",
        demo:"https://googlessearch.netlify.app/",
    },
    {
        number: 15,
        name: "Hover",
        imgLink: "hoverboard.png",
        demo:"https://hoverboards.netlify.app/",
    },
    {
        number: 16,
        name: "Ip-Address-Tracker",
        imgLink: "ipaddrestracker.png",
        demo:"https://ip-address-trackers.netlify.app/",
    },
    {
        number: 17,
        name: "User-Fliter",
        imgLink: "liveuserfilter.png",
        demo:"https://live-fliter.netlify.app/",
    },
    {
        number: 18,
        name: "Nathon-Card",
        imgLink: "nathoncard.png",
        demo:"https://unchatrednathoncard.netlify.app/",
    },
    {
        number: 19,
        name: "Password-Bg-Blur",
        imgLink: "passwordstorngblur.png",
        demo:"https://password-bg-blur.netlify.app/",
    },
    {
        number: 20,
        name: "Password-Toggle",
        imgLink: "passwordtoggle.png",
        demo:"https://togglepassword.netlify.app/",
    },
    {
        number: 21,
        name: "Pokedex",
        imgLink: "pokedex.png",
        demo:"https://pokemons-dex.netlify.app/",
    },
    {
        number: 22,
        name: "Gallery",
        imgLink: "randomimg.png",
        demo:"https://random-imgs.netlify.app/",
    },
    {
        number: 23,
        name: "Github-User",
        imgLink: "searchgithubuser.png",
        demo:"https://searchgithubuserss.netlify.app/",
    },
    {
        number: 24,
        name: "Product-Card",
        imgLink: "shoecard.png",
        demo:"https://shoecard.netlify.app/",
    },
    {
        number: 25,
        name: "Sound-Track",
        imgLink: "soundtrack.png",
        demo:"https://sound-borad.netlify.app/",
    },
    {
        number: 26,
        name: "Spilt-Landing-Page",
        imgLink: "split-landing-page.png",
        demo:"https://split-landing-pageeee.netlify.app/",
    },
    {
        number: 27,
        name: "Todo",
        imgLink: "todo-list.png",
        demo:"https://todosnewapp.netlify.app/",
    },
    {
        number: 28,
        name: "Testmonials",
        imgLink: "testmonial.png",
        demo:"https://testmonials-slider.netlify.app/",
    },
    {
        number: 29,
        name: "Twitter-Box",
        imgLink: "twitterbox.png",
        demo:"https://tweetbox.netlify.app/",
    },
    {
        number: 30,
        name: "Weather-App",
        imgLink: "weather.png",
        demo:"https://check-weather-app.netlify.app/",
    },  
]

console.log("heloo");

const projectsEl = document.getElementById("projects");

projects.forEach((project)=>{
    projectEl = document.createElement("div");
    projectEl.innerHTML = `
        <span class="day">Day ${project.number}</span>
        <img src="./img/${project.imgLink}" alt="${project.name}" />
        <div class="content">
            <h4>${project.name}</h4>
            <a
                href="${project.demo}"
                target="_blank"
                class="btn btn-primary"
                >Live Demo</a
            >
        </div>
    `;
    projectsEl.appendChild(projectEl);

})


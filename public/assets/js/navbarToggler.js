let pageUrl = window.location.href;
let navBarLinksElements = document.getElementById("navBarLinks");


function ActivationCurrentNavBarLink() {
    for (const key in navBarLinksElements.children) {
    
        if (navBarLinksElements.children[key].firstChild !== undefined) {
    
            let li = navBarLinksElements.children[key];
            // change to
            // li.classList.remove("active link class name");
            li.classList.remove("activNavLink");
            if (li.firstChild.href === pageUrl) {
                // change to
                // li.classList.remove("active link class name");
                li.classList.add("activNavLink");
                return;
    
            }
    
        }
    }
    navBarLinksElements.children[0].classList.add("activNavLink");
    
}
window.addEventListener("load", ActivationCurrentNavBarLink());

function removeActivationCurrentNavBarLink() {

    for (const key in navBarLinksElements.children) {
    
        if (navBarLinksElements.children[key].firstChild !== undefined) {
    
            let li = navBarLinksElements.children[key];
            // change to
            // li.classList.remove("active link class name");
            li.classList.remove("activNavLink");

    
        }
    }
}

navBarLinksElements.addEventListener("click", function (event) {
    let target = event.target;
    let li = "";

    if (target.tagName.toLowerCase() === "a") {

        removeActivationCurrentNavBarLink();
        // change to
        // target.parentElement.classList.add("active link class name");
        target.parentElement.classList.add("activNavLink");

    }else if(target.tagName.toLowerCase() === "li") {

        removeActivationCurrentNavBarLink();
         // change to
        // target.classList.add("active link class name");
        target.classList.add("activNavLink");
    }

    

})
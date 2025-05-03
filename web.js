var typed = new Typed(".multiple-text",{
    strings: ["UI/UX Designer", "Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
})
//About Me Tab//
var tablinks = document.getElementsByClassName("tab-links");
    var tabconents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabconents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
//Contact Form//
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyUshBiQ-oL9sXhdDPL7UBprNi6p0LkSSafxgignXQqBAQend_kuQ0GS9_srb2K8HEW-Q/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
    //Side Menu Mobile//
    var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }
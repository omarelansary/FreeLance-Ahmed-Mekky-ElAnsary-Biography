// first we must observe the container we want to fade it
const observer_1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log("I am out observer 1",entry.isIntersecting);
        if (entry.isIntersecting) {
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
            entry.isIntersecting="false";
            console.log("I am in observer 1",entry.isIntersecting);

        }
    })
})

const observer_2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".section-header")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".section-header")[1].classList.add("fadeInTop");
            document.querySelectorAll(".section-header")[2].classList.add("fadeInRight");
            console.log("I am in observer 2");
        }
    })
})
const observer_3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".card-div")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".card-div")[1].classList.add("fadeInTop");
            document.querySelectorAll(".card-div")[2].classList.add("fadeInRight");
            console.log("I am in observer 3");
        }
    })
})
observer_1.observe(document.querySelector(".container"));
observer_2.observe(document.querySelector(".section-header"));
observer_3.observe(document.querySelector(".card-row1"));
const label = document.getElementById("toggle");
let dark = true;

const all = document.getElementsByTagName("*");

label.addEventListener("click", () => {
    if(dark) {
        for(var i = 0; i < all.length; i++) {
            if(all[i].classList.contains("bg-dark")) {
                all[i].classList.replace("bg-dark", "bg-light");
            }

            if(all[i].classList.contains("text-light")) {
                all[i].classList.replace("text-light", "text-dark");
            }
        }
        label.textContent = "Toggle Light Mode";
        dark = false;
    } else {
        for(var i = 0; i < all.length; i++) {
            if(all[i].classList.contains("bg-light")) {
                all[i].classList.replace("bg-light", "bg-dark");
            }

            if(all[i].classList.contains("text-dark")) {
                all[i].classList.replace("text-dark", "text-light");
            }
        }

        label.textContent = "Toggle Dark Mode";
        dark = true;
    }
});
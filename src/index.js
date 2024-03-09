
        function knowMore() {
            let name = prompt("What is your name?");
            let time = prompt("What time do you want to climb?");

            if (time < 10) {
                alert(`We are not open yet ${name}, try later 🙂`);
            }
            else if (time > 22) {
                alert(`We are closing soon ${name}, try before 🙂`);
            }
            else {
                alert(`Thank you ${name}! See you soon 🙂`);
            }

        }

        let knowmoreButton = document.querySelector("button");

        knowmoreButton.addEventListener("click", knowMore);


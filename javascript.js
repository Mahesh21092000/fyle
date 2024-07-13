document.addEventListener('DOMContentLoaded', function () {
    const openPopupButton = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const closePopup = document.querySelector('.close');

    openPopupButton.addEventListener('click', function () {
        popup.style.display = 'flex';
    });

    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
    });

   
});

const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    function formSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch("https://getform.io/f/axojojzb", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

document.getElementsById('project-right-1-').addEventListener('mouseover',function(){
    document.getElementById('display-image').src = 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg';
});

   



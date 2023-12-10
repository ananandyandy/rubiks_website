document.addEventListener('DOMContentLoaded', function() {
    // Initializes Constant Variables to Select Flexboxes In The Home Page
    const about_nav = document.querySelectorAll('.button-1');
    const mechanics_nav = document.querySelectorAll('.button-2');
    const contact_nav = document.querySelectorAll('.button-3');
    const header = document.querySelector('header');

    // Implements Mouseover Feature To Display Button Function In A Header When Hovered Over
    about_nav.forEach(function(button) {
        button.addEventListener('mouseover', function() {
            const textElement = document.createElement('h1');
            textElement.textContent = 'Move To About Page';
            textElement.classList.add('hover-text');

            header.appendChild(textElement);
        });

        // Mouseout Functions Get Rid Of The Header Object When User Stops Hovering Over Buttons
        button.addEventListener('mouseout', function() {
            const textElement = header.querySelector('.hover-text');
            if (textElement) {
                textElement.remove();
            }
        });
    });

    mechanics_nav.forEach(function(button) {
        button.addEventListener('mouseover', function() {
            const textElement = document.createElement('h1');
            textElement.textContent = 'Move To Mechanics Page';
            textElement.classList.add('hover-text');

            header.appendChild(textElement);
        });

        button.addEventListener('mouseout', function() {
            const textElement = header.querySelector('.hover-text');
            if (textElement) {
                textElement.remove();
            }
        });
    });

    contact_nav.forEach(function(button) {
        button.addEventListener('mouseover', function() {
            const textElement = document.createElement('h1');
            textElement.textContent = 'Move To Contact Page';
            textElement.classList.add('hover-text');

            header.appendChild(textElement);
        });

        button.addEventListener('mouseout', function() {
            const textElement = header.querySelector('.hover-text');
            if (textElement) {
                textElement.remove();
            }
        });
    });



    // Implements OnClick Event To Correlate Buttons To Pages Of The Website
    about_nav.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = 'about.html'; 
        });
    });

    mechanics_nav.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = 'mechanics.html'; 
        });
    });

    contact_nav.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = 'contact_feedback.html'; 
        });
    });


});

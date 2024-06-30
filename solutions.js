document.getElementById('opinionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const person = document.getElementById('person').value;
    const opinion = document.getElementById('opinion').value;

    const opinionObject = { name, person, opinion };
    const opinions = JSON.parse(localStorage.getItem('opinions')) || [];
    opinions.push(opinionObject);
    localStorage.setItem('opinions', JSON.stringify(opinions));

    loadOpinions();
});

function loadOpinions() {
    const opinionsList = document.getElementById('opinionsList');
    opinionsList.innerHTML = '';
    const opinions = JSON.parse(localStorage.getItem('opinions')) || [];
    opinions.forEach(opinion => {
        const opinionDiv = document.createElement('div');
        opinionDiv.classList.add('opinion');
        opinionDiv.innerHTML = `<strong>${opinion.person}</strong><p>${opinion.opinion}</p>`;
        opinionsList.appendChild(opinionDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadOpinions);

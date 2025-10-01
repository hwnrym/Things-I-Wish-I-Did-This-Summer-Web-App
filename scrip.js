// Demo wishes
const wishes = [
    { title: "Go hiking", description: "Explore a new trail and enjoy nature." },
    { title: "Learn to surf", description: "Catch some waves at the beach." },
    { title: "Read a new book", description: "Find a summer read and relax." },
    { title: "Try a new recipe", description: "Cook something adventurous and delicious." },
    { title: "Visit a museum", description: "Discover art, history, or science exhibits." }
];

function renderCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    wishes.forEach(wish => {
        const card = document.createElement('div');
        card.className = 'wish-card';
        card.innerHTML = `<h3>${wish.title}</h3><p>${wish.description}</p>`;
        container.appendChild(card);
    });
}

function setGreeting(name) {
    const greeting = document.getElementById('greeting');
    greeting.textContent = `Hello, ${name}! Here are your summer wishes:`;
    greeting.style.display = 'block';
}

document.getElementById('submitName').addEventListener('click', () => {
    const name = document.getElementById('username').value.trim();
    if (name) {
        setGreeting(name);
    }
});

window.onload = renderCards;

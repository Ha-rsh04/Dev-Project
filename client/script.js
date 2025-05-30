document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/matches')
        .then(response => response.json())
        .then(data => {
            const matchesContainer = document.getElementById('matches');
            if (data.events && data.events.length > 0) {
                data.events.forEach(match => {
                    const matchDate = new Date(`${match.dateEvent}T${match.strTime}Z`);
                    const formattedDate = matchDate.toLocaleString('en-US', {
                        dateStyle: 'medium',
                        timeStyle: 'short'
                    });
                    const matchElement = document.createElement('div');
                    matchElement.className = 'match-card';
                    matchElement.innerHTML = `
                        <h2 class="text-xl font-semibold">${match.strHomeTeam} vs ${match.strAwayTeam}</h2>
                        <p class="text-gray-600">${formattedDate}</p>
                    `;
                    matchesContainer.appendChild(matchElement);
                });
            } else {
                matchesContainer.innerHTML = '<p class="text-center text-gray-500">No upcoming matches found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching matches:', error);
            document.getElementById('matches').innerHTML = '<p class="text-center text-red-500">Error loading matches.</p>';
        });
});
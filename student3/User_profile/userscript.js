function loadProfile() {
    const profileDetails = document.getElementById('profile-details');
    const savedProfile = localStorage.getItem('userProfile');
    
    if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        profileDetails.innerHTML = '';
        for (let key in profile) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${profile[key]}`;
            profileDetails.appendChild(p);
        }
    } else {
        profileDetails.innerHTML = '<p>No profile data found. Please complete your profile.</p>';
    }
}

function editProfile() {
    window.location.href = 'profile.html';
}

document.addEventListener('DOMContentLoaded', loadProfile);

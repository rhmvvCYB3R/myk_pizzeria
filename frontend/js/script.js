function openModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

function closeModal(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal || event.target.closest('button') === event.target) {
        modal.classList.add('hidden');
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert(`Logged in as: ${username}`);
        // Handle login logic here (e.g., send to server)
        closeModal();
    } else {
        alert('Please fill in both fields');
    }
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const password = document.getElementById('registerPassword').value;
    const licenseAgreement = document.getElementById('licenseAgreement').checked;

    if (username && email && phone && password && licenseAgreement) {
        if (validatePhoneNumber(phone)) {
            alert(`Registered as: ${username}`);
            // Handle registration logic here (e.g., send to server)
            closeModal();
        } else {
            alert('Please enter a valid phone number');
        }
    } else {
        alert('Please fill in all fields and accept the license agreement');
    }
}

function validatePhoneNumber(phone) {
    const regex = /^\+?\d{10,15}$/;  // Phone number validation regex
    return regex.test(phone);
}

function formatPhone() {
    let phoneInput = document.getElementById('phone');
    let phoneValue = phoneInput.value;
    const countryPrefix = document.getElementById('country').value;

    if (phoneValue && !phoneValue.startsWith(countryPrefix)) {
        phoneInput.value = countryPrefix + phoneValue.replace(/[^0-9]/g, '');
    }
}

function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('modalTitle').innerText = '📝 Registration';
}

function showLoginForm() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('modalTitle').innerText = '👤 Authorization';
}

// License agreement modal
function openLicenseAgreement() {
    document.getElementById('licenseAgreementModal').classList.remove('hidden');
}

function closeLicenseAgreement(event) {
    const modal = document.getElementById('licenseAgreementModal');
    if (event.target === modal || event.target.closest('button') === event.target) {
        modal.classList.add('hidden');
    }
}

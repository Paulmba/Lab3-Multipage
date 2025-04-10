document.addEventListener('DOMContentLoaded', () => {
	// Theme toggle
	document.getElementById('themeToggle').addEventListener('click', () => {
		document.body.classList.toggle('dark-theme');
	});

	const contactForm = document.getElementById('contactForm');
	if (contactForm) {
		contactForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const name = document.getElementById('name').value.trim();
			const message = document.getElementById('message').value.trim();
			if (name === '' || message === '') {
				alert('Please fill out all fields.');
			} else {
				document.getElementById(
					'response'
				).innerText = `Thanks, ${name}. We'll get back to you soon!`;
				e.target.reset();
			}
		});
	}

	const loadButton = document.getElementById('loadUsersBtn');
	if (loadButton) {
		loadButton.addEventListener('click', async () => {
			try {
				const res = await fetch('https://jsonplaceholder.typicode.com/users');
				const users = await res.json();
				const userList = document.getElementById('userList');
				userList.innerHTML = '';
				users.forEach((user) => {
					const li = document.createElement('li');
					li.textContent = user.name;
					userList.appendChild(li);
				});
			} catch (err) {
				console.error('Failed to load users:', err);
			}
		});
	}
});
document.querySelectorAll('.question').forEach((q) => {
	q.addEventListener('click', () => {
		q.nextElementSibling.classList.toggle('visible');
	});
});
// Back to Top Button functionality
const backToTopBtn = document.getElementById('backToTopBtn');

// Show the button after scrolling 100px
window.onscroll = () => {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		backToTopBtn.classList.add('visible');
	} else {
		backToTopBtn.classList.remove('visible');
	}
};

// Scroll back to top when clicked
backToTopBtn.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

// "No" button run away logic
noBtn.addEventListener('mouseover', () => {
    // Collect viewport dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calculate random position
    // Ensure it stays within viewport with some padding
    const randomX = Math.random() * (windowWidth - btnWidth - 40) + 20;
    const randomY = Math.random() * (windowHeight - btnHeight - 40) + 20;

    // Apply new position
    noBtn.style.position = 'fixed'; // Change to fixed to allow free movement relative to viewport
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    
    // Add a funny rotation
    const rotation = (Math.random() - 0.5) * 40;
    noBtn.style.transform = `rotate(${rotation}deg)`;
});

// "Yes" button click logic
yesBtn.addEventListener('click', () => {
    // 1. Trigger Confetti
    triggerConfetti();

    // 2. Hide question, show success
    questionSection.style.display = 'none';
    successSection.classList.remove('hidden');

    // 3. More confetti continuously for a few seconds
    let duration = 3 * 1000;
    let end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff4d6d', '#ffb3c1', '#ffffff']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff4d6d', '#ffb3c1', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});

function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffb3c1', '#ffe5ec']
    });
}

const tl = gsap.timeline();

// Animate card and its contents
tl.from('.card', { x: -50, duration: 1, ease: "power1.out" })
  .from('.productCard', { opacity: 0, y: -50, duration: 1 }, '-=0.5') // Overlap with previous
  .from('#greenApple', { x: -50, duration: 1, ease: "elastic.out(1, 0.3)" }, '-=0.5');

// Animate Navbar
gsap.from('nav ul li', { y: -20, opacity: 0, duration: 1, stagger: 0.2 });

// Add hover effect
document.querySelector('.productCard').addEventListener('mouseenter', () => {
  gsap.to('#greenApple', { scale: 1.2, duration: 0.5 });
});
document.querySelector('.productCard').addEventListener('mouseleave', () => {
  gsap.to('#greenApple', { scale: 1, duration: 0.5 });
});

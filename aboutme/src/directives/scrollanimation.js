const config = {
    root: null,
    threshold: 0.9,
};

const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        });
    }, config
);

export default {
    mounted(el) { // Use 'mounted' instead of 'bind'
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el);
    },
    unmounted(el) { // Clean up observer when element is removed from the DOM
        animatedScrollObserver.unobserve(el);
    }
};
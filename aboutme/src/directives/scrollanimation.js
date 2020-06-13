const config = {
    root: null,
    threshold: 0.3,
}

const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        });
    }, config
);

export default {
    bind(el) {
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el);
    }
}
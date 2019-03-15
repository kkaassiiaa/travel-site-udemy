import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

const mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), "80%");
new RevealOnScroll(document.querySelectorAll('.testimonial'), "60%");
const stickyHeader = new StickyHeader();
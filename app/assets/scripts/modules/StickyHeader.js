import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import SmoothScroll from 'smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector('.site-header');
    this.headerTriggerElement = document.querySelector('.large-hero__title');
    this.pageSections = document.querySelectorAll('.page-section');
    this.headerLinks = document.querySelectorAll('.primary-nav a');
    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    const scroll = new SmoothScroll('.primary-nav a');
    // If we want all links with scroll efect, we can uncomment next line:
    // const scroll = new SmoothScroll('a[href*="#"]');
  }

  createHeaderWaypoint() {
    const that = this.siteHeader;
    const trigger = this.headerTriggerElement;
    new Waypoint({
      element: trigger,
      handler: function(direction) {
        if (direction === "down") {
          that.classList.add('site-header--dark')
        } else {
          that.classList.remove('site-header--dark')
        }
      }
    });
  }

  // When we scroll down
  createPageSectionWaypoints() {
    this.pageSections.forEach((section) => {
      new Waypoint({
        element: section,
        handler: (direction) => {
          if (direction === "down") {
            const matchingHeaderLink = section.dataset.matchingLink;
            this.headerLinks.forEach((link) => {
              link.classList.remove('is-current-link')
            });
            document.querySelector(matchingHeaderLink).classList.add('is-current-link'); 
          }
        }, 
        offset: "18%"
      });

      // When we scroll up
      new Waypoint({
        element: section,
        handler: (direction) => {
          if (direction === "up") {
            const matchingHeaderLink = section.dataset.matchingLink;
            this.headerLinks.forEach((link) => {
              link.classList.remove('is-current-link')
            });
            document.querySelector(matchingHeaderLink).classList.add('is-current-link'); 
          }
        }, 
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
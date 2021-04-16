export default () => {
  const body = document.body;

  const scroll = (target) => {
    let targetTop = target.getBoundingClientRect().top;
    let scrollTop = window.pageYOffset;
    let targetOffsetTop = targetTop + scrollTop;
    let headerOffset = document.querySelector('.header').clientHeight;

    window.scrollTo(0, targetOffsetTop - headerOffset);
  }

  body.addEventListener('click', (e) => {
    let target = e.target;
    let dataScroll = target.closest('[data-scroll-to]');
    if(dataScroll === null) {
      return;
    }
    e.preventDefault();
    let scrollToItem = document.querySelector('.' + dataScroll.dataset.scrollTo);
    if(scrollToItem) {
      scroll(scrollToItem);
    }
  });
};

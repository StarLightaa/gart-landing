import 'focus-visible';
import AOS from 'aos';
import IMask from 'imask';
import lazyImages from './modules/lazyImages';
import scrollTo from './modules/scrollTo';
import documentReady from './helpers/documentReady';

import test from './test';
import popup from './components/popup';

documentReady(() => {
  // AOS.init();
  lazyImages();
  scrollTo();
  test();
  popup();

  const phone = document.querySelectorAll('.form__field--phone');
  phone.forEach(el => {
    const phoneMask = IMask(el, {
      mask: '+{7}(000)000-00-00',
      lazy: true,  // make placeholder always visible
      // placeholderChar: '#'     // defaults to '_'
    });
  });
});

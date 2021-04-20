import 'focus-visible';
import AOS from 'aos';
import lazyImages from './modules/lazyImages';
import scrollTo from './modules/scrollTo';
import documentReady from './helpers/documentReady';

import test from './test';
import popup from './components/popup';

documentReady(() => {
  AOS.init();
  lazyImages();
  scrollTo();
  test();
  popup();
});

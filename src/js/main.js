import 'focus-visible'
import lazyImages from './modules/lazyImages';
import scrollTo from './modules/scrollTo';
import documentReady from './helpers/documentReady';

import test from './test';
import popup from './components/popup';

documentReady(() => {
  lazyImages();
  scrollTo();
  test();
  popup();
});



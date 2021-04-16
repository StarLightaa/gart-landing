export default () => {
  const body = document.body;

  var showPopup = function(target) {
    target.classList.add('is-active');
  }
  var closePopup = function(target) {
      target.classList.remove('is-active');
  }

  const closestAttr = (item, attr) => {
    var node = item;

    while(node) {
        var attrValue = node.getAttribute(attr);
        if(attrValue) {
            return attrValue;
        }

        node = node.parentElement;
    }
    return null;
  }

  const closestItemByClass = (item, className) => {
    var node = item;

    while(node) {
      if(node.classList.contains(className)) {
          return node;
      }

      node = node.parentElement;
    }
    return null;
  }

  body.addEventListener('click', function(e) {
    var target = e.target;
    console.log('popup-close');
    console.log(target);
    if(target.classList.contains('popup-close') ||
        target.classList.contains('popup__inner')) {
        var popup = closestItemByClass(target, 'popup');
        console.log('close');
        console.log(popup);
        closePopup(popup);
        // body.classList.toggle('no-scroll');
    }
  })

  body.addEventListener('keydown', function(e) {
      if(e.keyCode !== 27) {
          return;
      }

      var popup = document.querySelector('.popup.is-active');
      if(popup) {
          closePopup(popup);
          // body.classList.toggle('no-scroll');
      }
  })

  body.addEventListener('click', function(e) {
    var target = e.target;
    var popupClass = closestAttr(target, 'data-popup');

    if(popupClass === null) {
        return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);
    if(popup) {
        showPopup(popup);
        // body.classList.toggle('no-scroll');
    }
  })
};

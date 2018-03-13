import React from 'react'
import ReactDOM from 'react-dom'
import './deni-react-popup-menu-trigger.scss'

class DeniReactPopupMenuTrigger extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showing: false
    };

    this.mousedownFn = () => {
      if (!this._clickedInsideElement(event.target)) {
        if (!this._clickedInsideADisabledSubmenu(event.target)) {
          this.hidePopupMenu();
          event.preventDefault();
        }
      }
    }
    document.addEventListener('mousedown', this.mousedownFn);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.mousedownFn);
  }

  _shouldShowPopupMenu(event) {
    let mouseButton = this.props.mouseButton || 'right';
    return ((mouseButton === 'left' && event.button === 0) || (mouseButton === 'right' && event.button === 2));
  }

  onMouseDown(event) {
    if (this._shouldShowPopupMenu(event)) {
      let cursorPos = this._getCursorXY(event);
      this.showPopupMenu(cursorPos.x, cursorPos.y);
      event.stopPropagation();
      event.preventDefault();
    }
  }

  showPopupMenu(cursorPosX, cursorPosY) {
    let popupMenu = document.querySelector('#' + this.props.popupMenuId);
    let margin = 3;

    popupMenu.style.left = (cursorPosX + margin) + 'px';
    popupMenu.style.top = (cursorPosY + margin) +  'px';
    popupMenu.style.display = 'block';

    this.hideSubItems(popupMenu);
  }

  hideSubItems(popupMenu) {
    let subMenus = popupMenu.querySelectorAll('.deni-react-popup-menu-container.submenu');
    subMenus.forEach(subMenu => {
      subMenu.style.display = null
    });
  }

  hidePopupMenu() {
    let popupMenu = document.querySelector('#' + this.props.popupMenuId);
    popupMenu.style.display = 'none';
  }

  contextMenu(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div
        ref={(elem, elem2)=> {
          this.element = elem
        }}
        className="deni-react-popup-menu-trigger-container"
        onMouseDown={ this.onMouseDown.bind(this) }
        onContextMenu={ this.contextMenu }
      >
        {
          this.props.children
        }
      </div>
    )
  }

  _clickedInsideElement(clickedElement) {
    let newClickedElement = clickedElement;
    let parentClickedElement = clickedElement.parentElement;
    while (parentClickedElement !== document.body) {
        if (parentClickedElement.className === this.element.className) {
          return true;
        }
        parentClickedElement = parentClickedElement.parentElement;
    }
    return false;
  }

  _clickedInsideADisabledSubmenu(clickedElement) {
    let newClickedElement = clickedElement;
    let parentClickedElement = clickedElement.parentElement;
    while (parentClickedElement !== document.body) {
        if (parentClickedElement.classList.contains('deni-react-popup-menu-item-container')) {
          if (parentClickedElement.classList.contains('disabled')) {
            return true;
          }
          return false;
        }
        parentClickedElement = parentClickedElement.parentElement;
    }
    return false;
  }

  _isSameElement(element1, element2) {
    return ((element1.parentElement === element2.parentElement) && (element1.className === element2.className));
  }

  _getPopOverElement() {
    return this.element.querySelector('.deni-react-popup-menu');
  }

  _getCursorXY(e) {
    return {
      x: (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft),
      y: (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop)
    }
  }


}

export default DeniReactPopupMenuTrigger;

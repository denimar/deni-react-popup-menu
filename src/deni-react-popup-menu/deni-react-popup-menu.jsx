import React from 'react'
import './deni-react-popup-menu.scss'
import DeniReactPopupMenuTrigger from './deni-react-popup-menu-trigger'
import DeniReactPopupMenuItem from './deni-react-popup-menu-item'
import DeniReactPopupMenuHelper from './deni-react-popup-menu.helper'

class DeniReactPopupMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      menuItems: []
    }
    this.currentMenuItemMouseMove = null;
  }

  componentDidMount() {
    if (this.props.children) {
      let menuItems = this.props.children.filter(item => {
        return item.type === DeniReactPopupMenuItem
      });
      this.setState({
        menuItems: menuItems
      });
    }
  }

  onMouseMove() {
    let elementMenu = document.querySelector('#' + this.props.id);
    let elementMenuItem = event.toElement;
    while (elementMenuItem !== elementMenu) {
      if (elementMenuItem.classList.contains('deni-react-popup-menu-item-container')) {
        if (this.currentMenuItemMouseMove !== elementMenuItem) {
          this.currentMenuItemMouseMove = elementMenuItem;
          this.onMouseEnterMenuItem(this.currentMenuItemMouseMove);
        }
        break;
      }
      elementMenuItem = elementMenuItem.parentElement;
    }
  }

  onMouseEnterMenuItem(menuItem) {
    //hide all submenus
    let parent = menuItem.closest('.deni-react-popup-menu-container');
    if (parent) {
      let allExistentSubMenus = parent.querySelectorAll('.deni-react-popup-menu-container.submenu');
      allExistentSubMenus.forEach(subMenu => {
        subMenu.style.display = 'none';
      });
    }

    //setTimeout(() => {
      //show submenus
      let subMenuElement = menuItem.querySelector('.deni-react-popup-menu-container.submenu');
      if (subMenuElement) {
        subMenuElement.style.display = 'block';
        subMenuElement.style.left = menuItem.offsetWidth + 'px';
        subMenuElement.style.marginTop = '-4px';
      }
    //}, 100)
  }

  componentDidUpdate(prevProps, prevState) {
    DeniReactPopupMenuHelper.checkLayoutWhenItemWithIcon(this.element, this.state.menuItems);
    this.element.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  render() {
    return (
      <div
        className="deni-react-popup-menu-container"
        id={ this.props.id }
        ref={ (elem) => {
          this.element = elem;
        }}
      >
        {
          this.state.menuItems
        }
      </div>
    )
  }

}

module.exports = {
  DeniReactPopupMenuTrigger: DeniReactPopupMenuTrigger,
  DeniReactPopupMenu: DeniReactPopupMenu,
  DeniReactPopupMenuItem: DeniReactPopupMenuItem
}

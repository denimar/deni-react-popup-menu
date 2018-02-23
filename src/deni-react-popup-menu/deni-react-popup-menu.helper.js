class DeniReactPopupMenuHelper {

  static _isThereAnyItemWithIcon(menuItems) {
    for (let i = 0; i < menuItems.length; i++) {
      let menuItem = menuItems[i];
      if (menuItem.props.icon) {
        return true;
      }
      // if (menuItem.props.children) {
      //   if (this._isThereAnyItemWithIcon(menuItem.props.children)) {
      //     return true;
      //   }
      // }
    }
    return false;
  }

  static checkLayoutWhenItemWithIcon(menuElement, menuItems) {
    if (this._isThereAnyItemWithIcon(menuItems)) {
      let menuIcons = menuElement.querySelectorAll('.deni-react-popup-menu-inner .menu-item-icon');
      menuIcons.forEach(menuIcon => {
        menuIcon.style.width = '24px';
      });
    }
  }

}

export default DeniReactPopupMenuHelper;

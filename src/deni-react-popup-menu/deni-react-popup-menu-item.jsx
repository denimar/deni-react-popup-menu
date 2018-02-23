import React from 'react'
import './deni-react-popup-menu-item.scss'
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down'
import DeniReactPopupMenuHelper from './deni-react-popup-menu.helper'

class DeniReactPopupMenuItem extends React.Component {

  constructor() {
    super();
    this.state = {
      menuItems: []
    }
  }

  componentDidMount() {
    if (this.props.children) {
      let children = this.props.children instanceof Array ? this.props.children : [this.props.children];
      let menuItems = children.filter(item => {
        return item.type === DeniReactPopupMenuItem
      });
      this.setState({
        menuItems: menuItems,
      });
    }
  }

  componentDidUpdate() {
    let elementMenu = this.element.querySelector('.deni-react-popup-menu-container.submenu');
    DeniReactPopupMenuHelper.checkLayoutWhenItemWithIcon(elementMenu, this.state.menuItems);
  }

  handleClick(data, disabled) {
    if (!disabled) {
      if (this.props.onClick) {
        this.props.onClick(data);
      }
    }
    event.stopPropagation();
    return false;
  }

  _htmlMenuItem(iconClass, text) {
    return (
      <div className="deni-react-popup-menu-inner">
        <div className="menu-item-icon">
          {
            iconClass ? (<i className={ iconClass }></i>) : null
          }
        </div>
        <span className="menu-item-text">{ text }</span>
      </div>
    )
  }

  render() {
    let withSeparatorCssClass = (this.props.separator ? ' with-separator' : '') ;
    let disabledCssClass = (this.props.disabled ? ' disabled' : '') ;

    return (
      <div
        className={ 'deni-react-popup-menu-item-container' + withSeparatorCssClass + disabledCssClass }
        onMouseDown={ this.handleClick.bind(this, this.props.data, this.props.disabled) }
        ref={ (elem) => {
          this.element = elem
        }}
      >
        <div className="deni-react-popup-menu-item">
          { this._htmlMenuItem(this.props.icon, this.props.html || this.props.text) }
          <MdArrowDropDown className={'deni-react-popup-menu-arrow' + (this.state.menuItems.length > 0 ? ' hassubitems' : '') } size="22" />
          {
            (this.state.menuItems.length > 0) ? (
              <div className="deni-react-popup-menu-container submenu">
                {
                  this.state.menuItems
                }
              </div>
            ) : null
          }
        </div>
      </div>
    )
  }

}

export default DeniReactPopupMenuItem;

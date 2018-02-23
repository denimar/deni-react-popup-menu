import React from 'react'
import './Examples.scss'
import { DeniReactPopupMenuTrigger, DeniReactPopupMenu, DeniReactPopupMenuItem } from '../../../src/deni-react-popup-menu/deni-react-popup-menu'

class Examples extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick(data) {
    console.log(data);
  }

  render() {
    const self = this;
    const innerHTML = (<span>Florianópolis - Santa Catarina - Brasil</span>);

    return (
      <div className="examples-container">

        <div className="title">deni-react-popup-menu - Examples</div>

        <div className="body">

          <DeniReactPopupMenuTrigger popupMenuId="popupMenu1" mouseButton="right">
            <div className="panel">Click here using right button</div>
          </DeniReactPopupMenuTrigger>

          <DeniReactPopupMenuTrigger popupMenuId="popupMenu1" mouseButton="left">
            <div className="panel">Click here using left button</div>
          </DeniReactPopupMenuTrigger>

          <DeniReactPopupMenu id="popupMenu1">
             <DeniReactPopupMenuItem icon="fa fa-user" text="Item 01" />
             <DeniReactPopupMenuItem text="Item 02">
                <DeniReactPopupMenuItem icon="fa fa-car" html="Item 02 - 01" />
                <DeniReactPopupMenuItem icon="fa fa-user" html="Item 02 - 02">
                  <DeniReactPopupMenuItem text="Item 02 - 02 - 01" />
                  <DeniReactPopupMenuItem text="Item 02 - 02 - 02" disabled />
                  <DeniReactPopupMenuItem text="Item 02 - 02 - 03" />
                </DeniReactPopupMenuItem>
                <DeniReactPopupMenuItem text="Item 02 - 03" />
             </DeniReactPopupMenuItem>
             <DeniReactPopupMenuItem text="Item 03" />
          </DeniReactPopupMenu>
        </div>

      </div>
    )

  }

}

export default Examples


/*
<DeniReactPopupMenu></DeniReactPopupMenu>
*/

# deni-react-popup-menu
A simple but useful popup menu for React


[examples](https://denimar.github.io/deni-react-popup-menu/examples)

TODO: In the future I will implement the theming, tests and Cloud CI.

## Installing with NPM

```
npm install deni-react-popup-menu --save

## Usage

Added to your react component
```html
    <DeniReactPopupMenuTrigger popupMenuId="popupMenu1">
      <div className="panel">Click here using left button</div>
    </DeniReactPopupMenuTrigger>

    <DeniReactPopupMenu id="popupMenu1">
       <DeniReactPopupMenuItem text="Item 01"/>
       <DeniReactPopupMenuItem text="Item 02">
          <DeniReactPopupMenuItem text="Item 02 - 01 " />
          <DeniReactPopupMenuItem text="Item 02 - 02 " />          
          <DeniReactPopupMenuItem text="Item 02 - 03 " />                    
       </DeniReactPopupMenuItem>
       <DeniReactPopupMenuItem text="Item 03" />
    </DeniReactPopupMenu>    
```
For more details: [examples](https://denimar.github.io/deni-react-popup-menu/examples)

## License

[MIT.](https://raw.githubusercontent.com/denimar/deni-react-treeview/master/LICENSE-MIT)

## Author

[Denimar de Moraes](http://github.com/denimar) (denimar@gmail.com) is a full-stack developper at the Wplex, Florianópolis, Santa Catarina, Brazil.

import React, { createElement as h } from "./lib/react.js";
import ReactDOM, { createRoot } from "./lib/react-dom.js";
import { PlanetPage } from "./pages/PlanetPage.js";
import { _PlanetPage } from "./pages/_PlanetPage.js";
import { AvatarPage } from "./pages/AvatarPage.js"

// const listData = {
//   items: [
//     { id: "1", title: "Life on Earth" },
//     { id: "2", title: "Jupiter's massive storms" },
//     { id: "3", title: "Explore Mars now" },
//     { id: "4", title: "Moonlight and craters" },
//   ],
// };


/* class syntax  */

// // 1. PlanetItem

// class PlanetItem extends React.Component {

//   render(){

//     const {id, title} = this.props;

//     return h('li',
//       {className:'item'},
//       h('img', { src: `/planet/image-0${id}.jpg`, alt: "" }),
//       h('span', { className: "content" }, title),
//       h('button',{ type: 'button', title: 'move item'},
//         h('img', {src: '/icons/icon.svg', alt: ' move item'})
//       ),
//     )
//   }
// }



// // 2. PlanetList
// class PlanetList extends React.Component {
  
//   render(){

//     const {lang, children} = this.props;

//     return h('ul',{className:'planet',lang:lang}, 
//       children
//     )
//   }
// }

// // 3. PlanetPage
// class PlanetPage extends React.Component {
  
//   render(){
//     return h(
//       PlanetList,
//       {lang:'en', children: listData.items.map(({id, title})=>h(PlanetItem, {key:id, id, title}))}
//     )
//   }
// }


/* function syntax  */


const container = document.getElementById('app');

if(container){
  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(h(AvatarPage))
}
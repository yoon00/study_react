import { listData } from "../data/data.js";
import React, { createElement as h } from "../lib/react.js";
import { PlanetList } from "../components/planet/PlanetList.js"
import { PlanetItem } from "../components/planet/PlanetItem.js"
export class PlanetPage extends React.Component {
  
  render(){
    return h(
      PlanetList,
      {lang:'en', children: listData.items.map(({id, title})=>h(PlanetItem, {key:id, id, title}))}
    )
  }
}
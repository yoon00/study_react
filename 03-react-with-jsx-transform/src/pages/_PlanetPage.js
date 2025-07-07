import { listData } from "../data/data.js";
import React, { createElement as h } from "../lib/react.js";
import { _PlanetList } from "../components/planet/_PlanetList.js"
import { _PlanetItem } from "../components/planet/_PlanetItem.js"
export function _PlanetPage() {
    return h(
      _PlanetList,
      {lang:'en', children: listData.items.map(({id, title})=>h(_PlanetItem, {key:id, id, title}))}
    )
}
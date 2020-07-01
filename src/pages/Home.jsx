import React from 'react'

import {Categories,SortPopup, PizzaBlock} from '../components';

function Home() {
    return (
        <div className="container">
          <div className="content__top">
            <Categories items={[ 'Фирменные','Мясные','Сырные','Диетические']} />
            <SortPopup items={[ 'популярности','цена','алфавит']} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock/>
          </div>
        </div>
    )
}

export default Home

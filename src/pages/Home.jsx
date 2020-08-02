import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock,PizzaLoadingBlock } from '../components';
import { setCategory } from '../redux/actions/filters';
import {fetchPizzas,setPizzas} from '../redux/actions/pizzas';



const categoryName = ['Фирменные', 'Мясные', 'Сырные', 'Диетические'];

const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавит', type: 'alphabet' },
];

function Home() {

  const dispatch = useDispatch();
  const items = useSelector(
    ({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(
      ({ pizzas }) => pizzas.isLoaded);
  
 

  React.useEffect(() => {

    (dispatch(fetchPizzas()))

  }, []);



  const onSelectCategory = index => {
    dispatch(setCategory(index));
  }



  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryName} />
        <SortPopup items={sortItems}
        />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded 
        ? items.map((obj) => ( <PizzaBlock key={obj.id} isLoading={true} {...obj} /> )) 
        : Array(12).fill(<PizzaLoadingBlock/>) }
      </div>
    </div>
  )
}

export default Home

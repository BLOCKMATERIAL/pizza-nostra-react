import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import {Header} from './components';
import {Home,Cart} from './pages';
import { Route } from 'react-router-dom';
import {setPizzas} from './redux/actions/pizzas';


function App() {
  const dispatch = useDispatch(); 
  const {items} = useSelector(({pizzas,filters}) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy
    }
  });


  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      dispatch(setPizzas(data.pizzas));
    }); 

}, []);

  return (
    <div className="wrapper">
    <Header/>
    <div className="content">
    <Route path="/" render={() => <Home items={items} /> } exact />
      <Route path="/cart" component={Cart} exact />
    </div>
  </div> 
  );

}


export default App;






// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (items) => dispatch (setPizzasAction(items)),
//     dispatch,
//   }
// }


// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

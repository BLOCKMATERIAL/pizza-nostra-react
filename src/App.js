import React from 'react';
import axios from 'axios';
import {Header} from './components';
import {Home,Cart} from './pages';
import { Route } from 'react-router-dom';
import {setPizzas as setPizzasAction} from './redux/actions/pizzas';
// import {Provider} from 'react-redux' ;
import { connect } from 'react-redux';

// function App() {


  // React.useEffect(() => {
  //   axios.get('http://localhost:3000/db.json').then(({data}) => {
  //   setPizzas(data.pizzas);
  //   })
    
  // }, [])


class App extends React.Component{
  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      this.props.dispatch(setPizzasAction(data.pizzas));
  });
}

  render(){
    return (
      <div className="wrapper">
      <Header/>
      <div className="content">
      <Route path="/" render={() => <Home items={this.props.items} /> } exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div> 
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch (setPizzasAction(items)),
    dispatch,
  }
}


const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

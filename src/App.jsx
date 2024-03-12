import { Route } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import Counter from './containers/Counter';
import FavoritesPage from './containers/Favorites';
import ProductsPage from './containers/Products';

const App = props => {
  return (
    <>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
        <Counter />
      </main>
    </>
  );
};

export default App;

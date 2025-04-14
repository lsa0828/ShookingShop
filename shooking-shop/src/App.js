import Header from './Headr';
import ProductList from './ProduckList';
import Title from './Title';

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <Title />
        <ProductList />
      </div>
    </div>
  );
}

export default App;

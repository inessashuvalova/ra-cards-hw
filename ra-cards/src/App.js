import './App.css';
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <Card
        imageLink="https://hostimul.com/uploads/catalog/blog/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg"
        imageDescription="Cookies with a smile"
        width="18"
        title="Cookies"
      >
        "Хлебобу́лочные изделия — пищевые продукты, получаемые методом выпекания из теста (состоящего как минимум из муки, воды и соли), разрыхлённого дрожжами или закваской."
      </Card>
    </div>
  );
}

export default App;
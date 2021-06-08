import { BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './componets/Menu';
import DriftPage from './componets/DriftPage';
import ForzaPage from './componets/ForzaPage';
import HomePage from './componets/HomePage';
import TimeAttackPage from './componets/TimeAttackPage';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}
// App.js
import { Routes, Route } from 'react-router-dom';
import Header from './components/HeaderComponent/Headerviews';
import { publicRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Component = route.component; 
          return (
            <Route
              key={index}
              path={route.path}
              element={<Component />} 
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

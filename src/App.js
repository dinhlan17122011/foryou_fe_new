// App.js
import { Routes, Route } from 'react-router-dom';  // Không cần BrowserRouter ở đây nữa
import Header from './components/HeaderComponent/Headerviews';
import { publicRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Component = route.component;  // Lấy component từ route
          return (
            <Route
              key={index}
              path={route.path}
              element={<Component />}  // Hiển thị component tương ứng với path
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

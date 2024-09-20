import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
import { useAppSelector } from './redux/main';
import { ScreenNameToComponentMapping } from './screens/main';

function App() {
  const screen = useAppSelector(s=>s.screen);
  const Screen = ScreenNameToComponentMapping.get(screen)!;
  return <Screen />;
}

export default App;

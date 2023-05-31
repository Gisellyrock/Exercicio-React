import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Slots from './Slots';

function App() {
  return (
    <div>
      <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍒" val2="🍌" val3="🍒" />

      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}

      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={['a', 'b', 'c']} /> */}

      {/* <Greeter perso="Bill" from="Colt" />
      <Greeter person="Ted" from="Colt" />
      <Greeter person="Rosa" from="Elton" /> */}
      {/* <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} /> */}
    </div>
  );
}

export default App;

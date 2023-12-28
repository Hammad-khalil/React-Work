import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
<>

{/* NavBar */}


{/* <Navbar title="React JS" menu="Blogs"/> */}
<Navbar/>

<div className="container">
<Textarea heading="Any AnyText here to Convert into Uppercase"/>
</div>
</>


  );
}

export default App;

import './App.css';
import Section from "./components/Section"
import './index.css';


function App() {
    return (
        <div className='container bg-warning'>
            <div className='row bg-warning text-center'>
                <h1 className="text-center">Tyler's House of Breakfast</h1>
                <h1 className='h6 text-decoration-none text-dark border-dark fw-bold'>348 E Main St, Lexington, KY</h1>
                    <h6>Hours of Operation</h6>
                    <h6>Mon-Sun 1am to 12am</h6>
                <h3>Menu</h3>
                <Section />
            </div>

            <footer className="d-flex flex-wrap align-items-center py-3 my-4 border-top border-dark border-5 justify-content-center">
                <div className='text-center'>
                    <h5 className="text-center">Tyler's House of Breakfast</h5>
                        <h6>Call Us</h6>
                        <h6>(555) 555-5555</h6>
                    <ul className="nav col justify-content-center list-unstyled d-flex">
                        <div className="template-demo">
                        </div>
                    </ul>
                </div>
            </footer>
        </div>


    );
}




export default App;

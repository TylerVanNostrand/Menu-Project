import './App.css';
import Section from "./components/Menu"
import './index.css';


function App() {
    return (
        <div className='container bg-warning'>
            <div className='row bg-warning text-center'>
                <h1 className="text-center">Tyler's House of Breakfast</h1>
                <h1 className='h6 text-decoration-none text-dark border-dark fw-bold'>(Definitely Not Waffle House)</h1>
                <h1 className='h6 text-decoration-none text-dark border-dark fw-bold'>204 Shoreside Dr, Lexington, KY</h1>

                    <h6>Hours of Operation</h6>
                    <h6>Mon-Sun, All Day!</h6>
                    <h6>24/7</h6>
                <h3>Menu</h3>
                <Section />
            </div>

            <footer className="d-flex flex-wrap align-items-center py-3 my-4 border-top border-dark border-5 justify-content-center">
                <div className='text-center'>
                    <h5 className="text-center">Tyler's House of Breakfast</h5>
                        <h6>Call Us</h6>
                        <h6>(555) 555-5555</h6>
                        <h1 className='h6 text-decoration-none text-dark border-dark fw-bold'>(Definitely Not Waffle House)</h1>

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

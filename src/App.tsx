// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import { NavBar } from 'components/layout/navbar/NavBar';
import { Footer } from 'components/layout/footer/Footer';
// Routes
import { AppRoutes } from 'routes/AppRoutes';
// Styles
import 'styles/styles.ts';

function App() {
    return (
        <div className="App">

            <NavBar />

            {/* Routes */}
            <AppRoutes />

            <Footer />

            {/* Info messages Toast Container */}
            <ToastContainer 
                position="bottom-right"
                autoClose={2500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme='dark'
            />
            
        </div>
    );
}

export default App;

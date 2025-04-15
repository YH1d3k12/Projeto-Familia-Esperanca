import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './styles.css';

export default function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <Outlet />
        </div>
    );
}

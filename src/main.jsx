import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.scss';
import Home from './views/Home/Home';
import Books from './views/Books/Books';
import EditBook from './views/EditBook/EditBook';
import RegisterBook from './views/RegisterBook/RegisterBook';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/books",
        element: <Books />,
    },
    {
        path: "/book/register",
        element: <RegisterBook />,
    },
    {
        path: "/book/edit/:bookId",
        element: <EditBook />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

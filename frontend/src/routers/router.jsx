import React from 'react'
import { createHashRouter } from 'react-router-dom';
import App from '../App';

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
            },
        ]
    }
]);

export default router
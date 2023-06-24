import React from 'react';
import ReactDOM from 'react-dom/client';
import App, {loader as rootLoader, action as rootAction} from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.jsx';
import Contact, {loader as contactLoader} from './routes/Contact.jsx';
import EditContact, { action as editAction} from './routes/EditContact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);

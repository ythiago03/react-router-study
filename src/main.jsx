import React from 'react';
import ReactDOM from 'react-dom/client';
import App, {loader as rootLoader, action as rootAction} from './App.jsx';
import './index.css';
import Index from "./routes/index";

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.jsx';
import Contact, {loader as contactLoader, action as contactAction} from './routes/Contact.jsx';
import EditContact, { action as editAction } from './routes/EditContact.jsx';
import {action as destroyAction} from './routes/Destroy.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [ 
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            errorElement: <div>Oops! There was an error.</div>,
            action: destroyAction,
          }
        ],
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);

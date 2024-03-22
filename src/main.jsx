import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Index from './routes/Index.jsx'
import Shop from './routes/Shop.jsx';
import shoploader from './loaders/shopLoader';
import { Provider } from 'react-redux'
import { store } from './store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Index />},
      {
        path: 'shop',
        element: <Shop />,
        loader: shoploader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

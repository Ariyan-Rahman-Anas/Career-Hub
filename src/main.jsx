import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './component/root/Root'
import Home from './component/home/Home'
import AppliedJobs from './component/applied jobs/AppliedJobs'
import Blogs from './component/blogs/Blogs'
import Statistics from './component/statistics/Statistics'
import ErrorPage from './component/error page/ErrorPage'
import JobDetails from './component/job details/JobDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=>fetch('/public/data/jobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('/public/data/jobs.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
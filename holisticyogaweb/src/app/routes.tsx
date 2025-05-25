// src/app/routes.tsx
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/home'


export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      //{ path: 'about', element: <About /> },
      // add more routes here
    ],
  },
]

export const router = createBrowserRouter(routes)

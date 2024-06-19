import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

import Dashboard from '../pages/Dashboard'
import Signin from '../pages/auth/Signin'
import Signup from '../pages/auth/Signup'
import Movie from '../pages/movies/Movie'
import Buy from '../pages/movies/Buy'

export function AppRouter() {
  const { checking, token, authorization } = useSelector(
    state => state.authState,
  )

  if (checking && token && authorization) {
    return <h5>Espere...</h5>
  }

  useEffect(() => {
    console.log(checking, token, authorization)
  }, [checking, token, authorization])

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Públicas */}
        <Route
          path='/signin'
          element={
            <PublicRoute isAuthenticated={!!token && !authorization}>
              <Signin />
            </PublicRoute>
          }
        />

        <Route
          path='/signup'
          element={
            <PublicRoute isAuthenticated={!!token && !authorization}>
              <Signup />
            </PublicRoute>
          }
        />
        {/* FIN Rutas Públicas */}

        <Route
          path='/'
          element={
            <PrivateRoute isAuthenticated={true}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path='/movies'
          element={
            <PrivateRoute isAuthenticated={!!token}>
              <Movie />
            </PrivateRoute>
          }
        />
        <Route
          path='/buys'
          element={
            <PrivateRoute isAuthenticated={!!token}>
              <Buy />
            </PrivateRoute>
          }
        />
        {/* FIN Rutas para Estudiantes */}
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

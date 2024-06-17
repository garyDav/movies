import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

import Dashboard from '../pages/Dashboard'
import Signin from '../pages/auth/Signin'
import Signup from '../pages/auth/Signup'

export function AppRouter() {
  const { checking, token, authorization } = useSelector(
    state => state.authState,
  )

  if (checking && token && authorization) {
    return <h5>Espere...</h5>
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Públicas */}
        <Route
          path='/signin'
          element={
            <PublicRoute>
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
            <PrivateRoute isAuthenticated={!!token}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/*<Route
          path='/usuarios'
          element={
            <PrivateRoute isAuthenticated={!!token}>
              <Users />
            </PrivateRoute>
          }
        />*/}
        {/* FIN Rutas para Estudiantes */}
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

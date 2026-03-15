import Auth from "./pages/auth/Auth"
import Cases from "./pages/cases/Cases"
import Landing from "./pages/landing/Landing"
import Profile from "./pages/profile/Profile"
import { AUTH_ROUTE, CASES_ROUTE, LANDING_ROUTE, PROFILE_ROUTE } from "./utils/consts"

export const authRoutes = [
    { path: CASES_ROUTE, Component: Cases },
    { path: PROFILE_ROUTE, Component: Profile }
]

export const publicRoutes = [
    { path: LANDING_ROUTE, Component: Landing },
    { path: AUTH_ROUTE, Component: Auth }
]
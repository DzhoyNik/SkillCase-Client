import Admin from "./pages/admin/Admin"
import Auth from "./pages/auth/Auth"
import Cases from "./pages/cases/Cases"
import Company from "./pages/company/Company"
import Landing from "./pages/landing/Landing"
import Notify from "./pages/notify/Notify"
import Profile from "./pages/profile/Profile"
import { ADMIN_ROUTE, AUTH_ROUTE, CASES_ROUTE, COMPANY_ROUTE, LANDING_ROUTE, NOTIFY_ROUTE, PROFILE_ROUTE } from "./utils/consts"

export const authRoutes = [
    { path: CASES_ROUTE, Component: Cases },
    { path: PROFILE_ROUTE, Component: Profile },
    { path: COMPANY_ROUTE, Component: Company },
    { path: NOTIFY_ROUTE, Component: Notify },
]

export const publicRoutes = [
    { path: LANDING_ROUTE, Component: Landing },
    { path: AUTH_ROUTE, Component: Auth },
    { path: ADMIN_ROUTE, Component: Admin }
]
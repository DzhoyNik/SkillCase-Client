import { BrowserRouter } from "react-router"
import AppRouter from './components/AppRouter';
import './css/style.css'
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check } from "./api/userAPI";
import { checkCompany } from "./api/companyAPI";

const App = observer(() =>  {
  const { user, company } = useContext(Context)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    check()
      .then(data => {
        user.setUser(data)
        user.setIsAuth(true)

        checkCompany(data.id)
          .then(data => company.setCompany(data.company))
          .catch(e => console.log(e))
      })
      .catch (e => console.log(e))
      .finally( () => setLoading(false) )  
  }, [])

  if (loading) {
    return <h2>Loading!</h2>
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;

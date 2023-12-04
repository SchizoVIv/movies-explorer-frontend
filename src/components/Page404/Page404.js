import "./Page404.css"
import { Link } from "react-router-dom"

function Page404() {
  return(
    <main className="main">
      <section className="page404">
        <div>
        <h2 className="page404__title">404</h2>
        <p className="page404__subtitle">Страница не найдена</p>
        </div>
        <Link className="page404__link" to="/">Назад</Link>
      </section>
    </main>
  )
}

export default Page404;

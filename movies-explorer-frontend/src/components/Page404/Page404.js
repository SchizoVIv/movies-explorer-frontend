import "./Page404.css"
import { useNavigate } from 'react-router-dom';

function Page404(props) {

  const navigate = useNavigate();

  const goBack = () => {
    if (props.isLoggedIn) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
  return(
    <main className="main">
      <section className="page404">
        <div>
        <h2 className="page404__title">404</h2>
        <p className="page404__subtitle">Страница не найдена</p>
        </div>
        <button className="page404__button" onClick={goBack}>Назад</button>
      </section>
    </main>
  )
}

export default Page404;

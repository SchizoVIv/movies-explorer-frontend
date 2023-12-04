import "./Profile.css"
import Header from "../Header/Header.js"

function Profile() {
  return (
    <main className="main">
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__form">
          <div className="profile__conteiner-name">
            <label className="profile__text profile__text_name">Имя</label>
            <input
              className="profile__input profile__input_name"
              type="text"
              placeholder="Имя"
              value="Виталий"
            />
          </div>
          <div className="profile__conteiner-email">
            <label className="profile__text profile__text_email">
              E-mail
            </label>
            <input
              className="profile__input profile__input_email"
              type="email"
              placeholder="email@mail.ru"
              value="pochta@yandex.ru"
            />
          </div>
        </div>
        <div className="profile__conteiner-button">
          <button className="profile__button-edit link-hover">Редактировать</button>
          <button className="profile__button-exit link-hover">Выйти из аккаунта</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;

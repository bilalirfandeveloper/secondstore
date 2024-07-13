// src/components/AnnouncementBar.jsx
function AnnouncementBar({ settings, isLoggedIn, cart }) {
  return (
    <div className={`announcement-bar color-${settings.color_scheme} gradient`} role="region" aria-label="Announcement">
      <div className="manutop">
        <div className="leftcolumnmenu">
          <a href={settings.logolink}>
            <img src={settings.logotop} alt="Logo" />
          </a>
          {settings.links.map((link) => (
            <a key={link.url} href={link.url}>{link.title}</a>
          ))}
        </div>
        <div className="middlesearchmenu">
          <SearchForm />
        </div>
        <div className="rightcolumnmenu">
          <AccountLink isLoggedIn={isLoggedIn} />
          <CartLink cart={cart} />
        </div>
      </div>
    </div>
  );
}

function SearchForm() {
  return (
    <form action="/search" method="get" role="search" className="search search-modal__form">
      <div className="field">
        <input
          className="search__input field__input"
          id="Search-In-Modal"
          type="search"
          name="q"
          placeholder="Search"
        />
        <label className="field__label" htmlFor="Search-In-Modal">Search</label>
        <button type="reset" className="reset__button field__button hidden">
          <svg className="icon icon-close" aria-hidden="true">
            <use href="#icon-reset" />
          </svg>
        </button>
        <button className="search__button field__button" aria-label="Search">
          <svg className="icon icon-search" aria-hidden="true">
            <use href="#icon-search" />
          </svg>
        </button>
      </div>
    </form>
  );
}

function AccountLink({ isLoggedIn }) {
  return (
    <NavLink prefetch="intent" to={isLoggedIn ? "/account" : "/account/login"} className="header__icon header__icon--account link focus-inset">
      <svg className="icon icon-account" aria-hidden="true">
        <use href="#icon-account" />
      </svg>
      <span className="visually-hidden">{isLoggedIn ? "Account" : "Sign in"}</span>
    </NavLink>
  );
}

function CartLink({ cart }) {
  return (
    <NavLink to="/cart" className="header__icon header__icon--cart link focus-inset" id="cart-icon-bubble">
      <svg className="icon icon-cart" aria-hidden="true">
        <use href="#icon-cart" />
      </svg>
      <span className="visually-hidden">Cart</span>
      {cart?.item_count > 0 && (
        <div className="cart-count-bubble">
          <span aria-hidden="true">{cart.item_count}</span>
          <span className="visually-hidden">{cart.item_count} items in cart</span>
        </div>
      )}
    </NavLink>
  );
}

export default AnnouncementBar;


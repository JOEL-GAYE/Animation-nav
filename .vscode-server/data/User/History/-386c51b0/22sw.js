function About({ image = "https://via.placeholder.com/215", about }) {
    return (
      <aside>
        <img src={logo} alt="blog logo" />
        <p>{about}</p>
      </aside>
    );
  }
  
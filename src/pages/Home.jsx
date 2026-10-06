function Home() {
  return (
    <main className="home-page">

      <section className="home-hero">
        <p className="home-label">THE PEOPLE OF SOUTH SUDAN</p>

        <h1>
          Discover the Rich Heritage of the Dinka People
        </h1>

        <p>
          Welcome to Dinka Heritage, a website dedicated to preserving,
          celebrating and sharing the history, culture, traditions and
          identity of the Dinka people of South Sudan.
        </p>

        <div className="home-buttons">
          <a href="/about-dinka">Discover Our Heritage</a>
          <a href="/culture">Explore Our Culture</a>
        </div>
      </section>

      <section className="home-intro">
        <p className="section-label">WELCOME</p>

        <h2>Preserving Our Heritage</h2>

        <p>
          The Dinka people have a rich cultural heritage built around
          community, family, language, cattle, traditional knowledge,
          music, dance and storytelling. This website provides a place
          to learn about and appreciate this heritage.
        </p>
      </section>

      <section className="home-features">
        <div className="feature-card">
          <span>📖</span>
          <h3>History</h3>
          <p>
            Learn about the history, origins and development of the
            Dinka people.
          </p>
        </div>

        <div className="feature-card">
          <span>🐄</span>
          <h3>Culture</h3>
          <p>
            Explore Dinka traditions, cattle culture, marriage,
            music, dance and community life.
          </p>
        </div>

        <div className="feature-card">
          <span>🌍</span>
          <h3>Identity</h3>
          <p>
            Discover the importance of land, language, community
            and identity in Dinka life.
          </p>
        </div>
      </section>

    </main>
  )
}

export default Home
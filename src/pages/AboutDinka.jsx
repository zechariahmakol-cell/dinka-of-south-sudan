function AboutDinka() {
  return (
    <main className="about-page">

      <section className="page-header">

        <p className="section-label">
          ABOUT THE DINKA
        </p>

        <h1>
          Discover the Dinka People
        </h1>

        <p>
          Learn about the history, identity, language, traditions and
          community life of the Dinka people of South Sudan.
        </p>

      </section>


      <section className="about-cards">

        {/* Card 1 */}
        <article className="about-card">

          <div className="about-card-image">
            <img
              src="/src/images/dinka-hero.png"
              alt="Dinka people and cattle"
            />
          </div>

          <div className="about-card-content">

            <p className="section-label">
              01 — HISTORY
            </p>

            <h2>
              History and Origins
            </h2>

            <p>
              Discover the history of the Dinka people and the
              communities that have lived across different regions
              of South Sudan for generations.
            </p>

          </div>

        </article>


        {/* Card 2 */}
        <article className="about-card">

          <div className="about-card-image">
            <div className="about-image-placeholder">
              <span>PHOTO</span>
            </div>
          </div>

          <div className="about-card-content">

            <p className="section-label">
              02 — IDENTITY
            </p>

            <h2>
              Dinka Identity
            </h2>

            <p>
              Explore the importance of family, clan, community,
              land and traditions in shaping Dinka identity.
            </p>

          </div>

        </article>


        {/* Card 3 */}
        <article className="about-card">

          <div className="about-card-image">
            <div className="about-image-placeholder">
              <span>PHOTO</span>
            </div>
          </div>

          <div className="about-card-content">

            <p className="section-label">
              03 — LANGUAGE
            </p>

            <h2>
              Dinka Language
            </h2>

            <p>
              Learn about the Dinka language and its importance in
              preserving stories, songs, names, proverbs and cultural
              knowledge.
            </p>

          </div>

        </article>


        {/* Card 4 */}
        <article className="about-card">

          <div className="about-card-image">
            <div className="about-image-placeholder">
              <span>PHOTO</span>
            </div>
          </div>

          <div className="about-card-content">

            <p className="section-label">
              04 — FAMILY
            </p>

            <h2>
              Family and Community
            </h2>

            <p>
              Family relationships, respect for elders, cooperation
              and community responsibility are important parts of
              traditional Dinka life.
            </p>

          </div>

        </article>


        {/* Card 5 */}
        <article className="about-card">

          <div className="about-card-image">
            <div className="about-image-placeholder">
              <span>PHOTO</span>
            </div>
          </div>

          <div className="about-card-content">

            <p className="section-label">
              05 — TRADITION
            </p>

            <h2>
              Cattle and Traditional Life
            </h2>

            <p>
              Cattle have an important place in many Dinka communities
              and are connected with family life, ceremonies, social
              relationships and cultural traditions.
            </p>

          </div>

        </article>


        {/* Card 6 */}
        <article className="about-card">

          <div className="about-card-image">
            <div className="about-image-placeholder">
              <span>PHOTO</span>
            </div>
          </div>

          <div className="about-card-content">

            <p className="section-label">
              06 — MIGRATION
            </p>

            <h2>
              Migration and Identity
            </h2>

            <p>
              Explore how migration has affected Dinka communities
              and how people continue to maintain their culture and
              identity in different parts of the world.
            </p>

          </div>

        </article>

      </section>


      <section className="about-cta">

        <p className="section-label">
          PRESERVE OUR HERITAGE
        </p>

        <h2>
          Our Heritage, Our Identity
        </h2>

        <p>
          Understanding our history and culture helps preserve our
          heritage for present and future generations.
        </p>

        <a href="/culture">
          Explore Dinka Culture →
        </a>

      </section>

    </main>
  )
}

export default AboutDinka
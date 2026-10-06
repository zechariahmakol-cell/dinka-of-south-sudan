function Articles() {
  return (
    <main className="articles-page">

      {/* Page Header */}
      <section className="page-header">

        <p className="section-label">
          KNOWLEDGE & STORIES
        </p>

        <h1>
          Dinka Articles
        </h1>

        <p>
          Discover stories and reflections about the history, culture,
          traditions, identity and experiences of the Dinka people of
          South Sudan.
        </p>

      </section>


      {/* Articles */}
      <section className="articles-content">


        {/* Article 1 */}
        <article className="article-card">

          <p className="article-category">
            01 — HISTORY
          </p>

          <h2>
            The History and Heritage of the Dinka People
          </h2>

          <p>
            Explore the origins, history and development of the Dinka
            people and learn how their heritage has been preserved
            through generations.
          </p>

          <a href="/history-article">
            Read Full Article →
          </a>

        </article>


        {/* Article 2 */}
        <article className="article-card">

          <p className="article-category">
            02 — CULTURE
          </p>

          <h2>
            Dinka Culture and Traditional Life
          </h2>

          <p>
            Learn about important aspects of Dinka culture, including
            cattle, marriage, family life, music, dance, language and
            traditional practices.
          </p>

          <a href="/culture-article">
            Read Full Article →
          </a>

        </article>


        {/* Article 3 */}
        <article className="article-card">

          <p className="article-category">
            03 — IDENTITY
          </p>

          <h2>
            Understanding Dinka Identity
          </h2>

          <p>
            Discover how family, clan, language, land, traditions and
            community relationships shape the identity and belonging
            of the Dinka people.
          </p>

          <a href="/identity-article">
            Read Full Article →
          </a>

        </article>


        {/* Article 4 */}
        <article className="article-card">

          <p className="article-category">
            04 — MIGRATION
          </p>

          <h2>
            Migration and the Dinka People
          </h2>

          <p>
            Explore the history of Dinka migration and the challenges
            people face while maintaining their culture and identity
            in new places.
          </p>

          <a href="/migration-article">
            Read Full Article →
          </a>

        </article>


        {/* Article 5 */}
        <article className="article-card">

          <p className="article-category">
            05 — CATTLE
          </p>

          <h2>
            Cattle and Dinka Traditional Life
          </h2>

          <p>
            Understand the important relationship between cattle and
            Dinka life, including their role in family, marriage,
            ceremonies, wealth and social relationships.
          </p>

          <a href="/cattle-article">
            Read Full Article →
          </a>

        </article>


        {/* Article 6 */}
        <article className="article-card">

          <p className="article-category">
            06 — COMMUNITY
          </p>

          <h2>
            Dinka Communities in South Sudan and Beyond
          </h2>

          <p>
            Learn about Dinka communities in South Sudan and around
            the world and the different ways they maintain their
            relationships, traditions and cultural identity.
          </p>

          <a href="/community-article">
            Read Full Article →
          </a>

        </article>


      </section>

    </main>
  )
}

export default Articles

import { useState } from 'react'

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const galleryImages = [
  {
    src: '/src/images/dinka-people.png',
    alt: 'Dinka people',
    categories: ['Dinka People', 'Communities Today']
  },
  {
    src: '/src/images/dinka-dance.png',
    alt: 'Dinka traditional dance',
    categories: ['Dance & Music', 'Ceremonies']
  },
  {
    src: '/src/images/dinka-cattle-herder.png',
    alt: 'Dinka cattle herder',
    categories: ['Dinka People', 'Traditional Life', 'Land & Environment']
  },
  {
    src: '/src/images/dinka-warrior.png',
    alt: 'Dinka traditional warrior',
    categories: ['Dinka People', 'Culture & Dress']
  },
  {
    src: '/src/images/dinka-cattle.png',
    alt: 'Dinka cattle',
    categories: ['Traditional Life', 'Land & Environment']
  },
  {
    src: '/src/images/dinka-community.png',
    alt: 'Dinka community',
    categories: ['Communities Today', 'Traditional Life']
  }
]

const filteredImages =
  activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((image) =>
        image.categories.includes(activeCategory)
      )
      
  return (
    <main className="gallery-page">

      <section className="page-header">
        <p className="section-label">DINKA GALLERY</p>

        <h1>
          Discover the Dinka People
        </h1>

        <p>
          Explore photographs of Dinka people, culture, traditions,
          landscapes and community life from South Sudan and around
          the world.
        </p>
      </section>

      <section className="gallery-content">

        <div className="gallery-intro">
          <h2>Explore Dinka Life</h2>

          <p>
            This gallery is a visual collection celebrating the people,
            culture, traditions and everyday life of the Dinka people.
            It provides visitors from around the world with an opportunity
            to learn about Dinka heritage through photographs.
          </p>
        </div>

        <div className="gallery-categories">

          <button
  className={`gallery-category ${activeCategory === 'All' ? 'active' : ''}`}
  onClick={() => setActiveCategory('All')}
>
  All
</button>

         <button
  className={`gallery-category ${activeCategory === 'Dinka People' ? 'active' : ''}`}
  onClick={() => setActiveCategory('Dinka People')}
>
  Dinka People
</button>

          <button
  className={`gallery-category ${activeCategory === 'Traditional Life' ? 'active' : ''}`}
  onClick={() => setActiveCategory('Traditional Life')}
>
  Traditional Life
</button>

         <button
  className={`gallery-category ${activeCategory === 'Culture & Dress' ? 'active' : ''}`}
  onClick={() => setActiveCategory('Culture & Dress')}
>
  Culture & Dress
</button>

          <button
  className={`gallery-category ${activeCategory === 'Dance & Music' ? 'active' : ''}`}
  onClick={() => setActiveCategory('Dance & Music')}
>
  Dance & Music
</button>

         <button
  className={`gallery-category ${activeCategory === 'Ceremonies' ? 'active' : ''}`}
  onClick={() => setActiveCategory('Ceremonies')}
>
  Ceremonies
</button>

          <button
  className={`gallery-category ${activeCategory === 'Land & Environment' ? 'active' : ''}`}
  onClick={() => setActiveCategory('Land & Environment')}
>
  Land & Environment
</button>

         <button
  className={`gallery-category ${activeCategory === 'Communities Today' ? 'active' : ''}`}
  onClick={() => setActiveCategory('Communities Today')}
>
  Communities Today
</button>

        </div>

        <div className="gallery-grid">
  {filteredImages.map((image) => (
    <div className="gallery-item" key={image.src}>
      <img src={image.src} alt={image.alt} />
    </div>
  ))}
</div>

      </section>

    </main>
  )
}

export default Gallery
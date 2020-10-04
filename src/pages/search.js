import React from "react"
import { Link, graphql } from "gatsby"
import { Index } from "lunr"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchForm from "../components/search-form"
import { MainContent } from '../components/styles/base'

const SearchPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  // We can read what follows the ?q= here
  // While you could install some external library
  // (or should if you care about IE users),
  // URLSearchParams provides a native way to get URL params
  // location.search.slice(1) gets rid of the "?"
  const params = new URLSearchParams(location.search.slice(1))
  const q = params.get("q") || ""

  // LunrIndex is available via page query
  const { store } = data.LunrIndex
  // lunr in action here
  const index = Index.load(data.LunrIndex.index)
  let results = []
  try {
    // search is a lunr method
    results = index.search(q).map(({ ref }) => {
      // Map search results to an array of {slug, title, excerpt} objects
      return {
        slug: ref,
        ...store[ref],
      }
    })
  } catch (error) {
    console.log(error)
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Búscador" />
      <MainContent>
      {q ? <h1>Resultados de la Búsqueda </h1> : <h1>¿Qué estás buscando?</h1>}
      <SearchForm initialQuery={q} />
      {results.length  ? (
        results.map(result => {
          return (
            <article key={result.slug}>
              <h2>
                <Link to={result.slug}>{result.title || result.slug}</Link>
              </h2>
              <p>{result.excerpt}</p>
            </article>
          )
        })
      ) : (
        <p>No se encontro ningun resultado.</p>
      )}
      </MainContent>
    </Layout>
  )
}
export default SearchPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    LunrIndex
  }
`
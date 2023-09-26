import Link from "next/link"

export function Links({ data, pathname }) {
  return (
    <Link
      href={{
        pathname: pathname,
        query: {
          slug: data.url_site,
          id: data.cod_grupo,
        },
      }}
    >
      <a>{data.name}</a>
    </Link>
  )
}

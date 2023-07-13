export default function Page404() {
  return (
    <>
      <h1>Redirecionando..</h1>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { res } = context

  res.writeHead(302, { Location: "/" })
  res.end()

  return {
    props: {},
  }
}

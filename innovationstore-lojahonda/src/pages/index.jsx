export default function Home() {
  return (
    <div>
      <h1>Redirecionando...</h1>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  return {
    redirect: {
      //redirecionar para www.innovationbrindes.com.br
      destination: "https://www.innovationbrindes.com.br",
      permanent: false,
    },
  }
}

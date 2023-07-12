import { ConfirmarCompra } from "../../components/ConfirmacaoCompra";

const ConfirmacaoCompra = () => {
  return <ConfirmarCompra />;
};

export default ConfirmacaoCompra;

export const getServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

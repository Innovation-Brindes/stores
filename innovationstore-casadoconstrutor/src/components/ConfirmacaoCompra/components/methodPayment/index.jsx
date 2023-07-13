import { MethodCard } from "./MethodCard";
import { MethodPix } from "./methodPix/MethodPix";
import { useRouter } from "next/router";

export const MethodContainer = ({
  method,
  valorProduto,
  descricaoProduto,
  quantidadeProduto,
  dataBack,
  urlPix,
  codigoPix,
  isMinWidthMedium,
  dadosPix,
  paymentType,
  aprovadorPor,
  chaveEmp,
  valores,
  valorFreteAmostra,
}) => {
  const router = useRouter();

  // paymentType.toString() === "BOLETO" &&
  //   router.push("/confirmacao-compra/boleto/success");

  return (
    <>
      {paymentType.toString() === "CARTÃO CREDITO" && aprovadorPor && (
        <MethodCard
          valorProduto={valorProduto}
          descricaoProduto={descricaoProduto}
          quantidadeProduto={quantidadeProduto}
          dataBack={dataBack}
          chaveEmp={chaveEmp}
          valores={valores}
          valorFreteAmostra={valorFreteAmostra}
        />
      )}
      {paymentType.toString() === "PIX" && aprovadorPor && (
        <MethodPix
          urlPix={urlPix}
          codigoPix={codigoPix}
          isMinWidthMedium={isMinWidthMedium}
          dadosPix={dadosPix}
        />
      )}
    </>
  );
};

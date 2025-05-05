import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, CloseButton, Flex, Text, useMediaQuery, useToast, VStack } from '@chakra-ui/react';
import { AnimateSharedLayout } from 'framer-motion';
import React, { Component, useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { SalvarAvisoProdutoIndisponivel } from '../../../services/api';
import { ComponentFormIndisponivelContainer, ComponentVStackContainer, DadosProdutosContentDetalhesIndisponivel, DadosProdutosContentDetalhesIndisponivelContent, DetalhesIndisponivelContentForm, DetalhesIndisponivelContentFormAvise, DetalhesIndisponivelContentFormSimilares, DetalhesIndisponivelContentHeader, DetalhesIndisponivelContentHeaderDesc, DetalhesIndisponivelContentHeaderImg, MotionBox } from '../styles';

const produtoIndisponivel = "/images/menu/produto-indisponivel.png";
export default function ComponentFormIndisponivel(props) {

    const [nome_parceiro, setNomeParceiro] = useState('');
    const [cpf_cnpj_parceiro, setCPFCNPJParceiro] = useState('');
    const [razaoSocialParceiro, setRazaoSocialParceiro] = useState('');
    const [require_razao, setRequire_razao] = useState(false);
    const [telefone_parceiro, setTelefoneParceiro] = useState('');
    const [email_parceiro, setEmailParceiro] = useState('');
    const [maskCPFCNPJ, setMaskCPFCNPJ] = useState("999.999.999-999");
    const [maskTelefone, setMaskTelefone] = useState("(99) 9999-9999");
    const [mobileIphoneView, setMobileIphoneView] = useState();
    const [mobileView, setmobileView] = useState();
    const [loading, setLoading] = useState(false);

    const [acceptNotification, setAcceptNotification] = useState(true);
    const [sizeHeight768px] = useMediaQuery('(max-height: 769px)')
    const [sizeWidth1366px] = useMediaQuery('(max-width: 1367px)')
    const [widthScreen400] = useMediaQuery('(max-width:400px)');
    const toast = useToast()

    useEffect(() => {
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            setMobileIphoneView(true);
        } else {
            setMobileIphoneView(false);
        }
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setmobileView(true);
        } else {
            setmobileView(false);
        }
        setAcceptNotification(true);
    }, [])

    async function salvarAvisoProdutoIndisponivel() {
        setLoading(true);
        if (ifnull(nome_parceiro, "") == "") {
            toast({
                position: 'top', duration: 4000,
                render: () => (
                    <Box borderRadius='5px' boxShadow='2px 2px 20px 2px gray' p={1} bg='#EDEDED'>
                        <Flex justifyContent='space-between'>
                            <Flex justifyContent='center' alignItems='center'>
                                <InfoOutlineIcon ml='5px' fontSize='25px' />
                            </Flex>
                            <Text pr='5px' color='black' mt='15px' ml='5px'>Preencha o campo "Nome" no formulário.</Text>
                            <CloseButton onClick={toast.closeAll} boxShadow='none !important' />
                        </Flex>
                    </Box>
                )
            })
        } else if (!validaCpfCnpj(ifnull(cpf_cnpj_parceiro, ""))) {
            toast({
                position: 'top', duration: 4000,
                render: () => (
                    <Box borderRadius='5px' boxShadow='2px 2px 20px 2px gray' p={1} bg='#EDEDED'>
                        <Flex justifyContent='space-between'>
                            <Flex justifyContent='center' alignItems='center'>
                                <InfoOutlineIcon ml='5px' fontSize='25px' />
                            </Flex>
                            <Text pr='5px' color='black' mt='15px' ml='5px'>Campo "CPF/CNPJ" inválido {cpf_cnpj_parceiro}.</Text>
                            <CloseButton onClick={toast.closeAll} boxShadow='none !important' />
                        </Flex>
                    </Box>
                )
            })
        } else if (require_razao && ifnull(razaoSocialParceiro, "") == "") {
            toast({
                position: 'top', duration: 4000,
                render: () => (
                    <Box borderRadius='5px' boxShadow='2px 2px 20px 2px gray' p={1} bg='#EDEDED'>
                        <Flex justifyContent='space-between'>
                            <Flex justifyContent='center' alignItems='center'>
                                <InfoOutlineIcon ml='5px' fontSize='25px' />
                            </Flex>
                            <Text pr='5px' color='black' mt='15px' ml='5px'>Preencha o campo "Razão Social" no formulário.</Text>
                            <CloseButton onClick={toast.closeAll} boxShadow='none !important' />
                        </Flex>
                    </Box>
                )
            })
        } else if (!validaTelefone(ifnull(telefone_parceiro, ""))) {
            toast({
                position: 'top', duration: 4000,
                render: () => (
                    <Box borderRadius='5px' boxShadow='2px 2px 20px 2px gray' p={1} bg='#EDEDED'>
                        <Flex justifyContent='space-between'>
                            <Flex justifyContent='center' alignItems='center'>
                                <InfoOutlineIcon ml='5px' fontSize='25px' />
                            </Flex>
                            <Text pr='5px' color='black' mt='15px' ml='5px'>Campo de "Telefone" inválido.</Text>
                            <CloseButton onClick={toast.closeAll} boxShadow='none !important' />
                        </Flex>
                    </Box>
                )
            })
        } else if (ifnull(email_parceiro, "") == "") {
            toast({
                position: `${mobileView ? 'top' : 'bottom'}`, duration: 4000,
                render: () => (
                    <Box borderRadius='5px' boxShadow='2px 2px 20px 2px gray' p={1} bg='#EDEDED'>
                        <Flex justifyContent='space-between'>
                            <Flex justifyContent='center' alignItems='center'>
                                <InfoOutlineIcon ml='5px' fontSize='25px' />
                            </Flex>
                            <Text pr='5px' color='black' mt='15px' ml='5px'>Preencha o campo "Email" no formulário.</Text>
                            <CloseButton onClick={toast.closeAll} boxShadow='none !important' />
                        </Flex>

                    </Box>
                )
            })
        } else {
            var param = {
                nome_parceiro: nome_parceiro,
                cpf_cnpj_parceiro: cpf_cnpj_parceiro.replaceAll(".", "").replaceAll("/", "").replaceAll("-", "").trim(),
                razao_social_parceiro: razaoSocialParceiro,
                telefone_parceiro: telefone_parceiro.replaceAll("(", "").replaceAll(")", "").replaceAll(" ", "").replaceAll("-", "").trim(),
                email_parceiro: email_parceiro,
                codigo_produto: props.state.cod_prod,
            };
            const response = await SalvarAvisoProdutoIndisponivel.post("", param);
            var data = response.data;

            if(data.result){
                setLoading(false);
                toast({
                    position: `${mobileView ? 'top' : 'bottom'}`, duration: 4000,
                    render: () => (
                        <Box borderRadius='5px' boxShadow='2px 2px 20px 2px gray' p={1} bg='#8EC505'>
                            <Flex justifyContent='space-between'>
                                <Flex justifyContent='center' alignItems='center'>
                                    <InfoOutlineIcon ml='5px' fontSize='25px' color='white'/>
                                </Flex>
                                <Text pr='5px' color='white' mt='15px' ml='5px'>Dados salvos com sucesso.</Text>
                                <CloseButton onClick={toast.closeAll} boxShadow='none !important' color='white' />
                            </Flex>
        
                        </Box>
                    )
                });
                setNomeParceiro('');
                setCPFCNPJParceiro('');
                setRazaoSocialParceiro('');
                setRequire_razao(false);
                setTelefoneParceiro('');
                setEmailParceiro('');
            }

        }
    }

    function handleChangeCPFCNPJ(value) {
        var format_data = value.replaceAll(".", "");
        var format_data = format_data.replaceAll("-", "");
        var format_data = format_data.replaceAll("/", "");

        if (format_data.length > 11) {
            setMaskCPFCNPJ("99.999.999/9999-99")
            setRequire_razao(true)
        } else if (format_data.length <= 11) {
            setMaskCPFCNPJ("999.999.999-999")
            setRequire_razao(false)
        }
    }

    function handleTelefoneForm(value) {
        var format_data = value.replaceAll("(", "");
        var format_data = format_data.replaceAll(")", "");
        var format_data = format_data.replaceAll("-", "");
        var format_data = format_data.replaceAll(" ", "");

        if (format_data.length > 10) {
            setMaskTelefone("(99) 9 9999-9999")
        } else if (format_data.length <= 10) {
            setMaskTelefone("(99) 9999-99999")
        }
    }

    function validaCpfCnpj(val) {
        if (val.length == 14) {
            var cpf = val.trim();

            cpf = cpf.replace(/\./g, "");
            cpf = cpf.replace("-", "");
            cpf = cpf.split("");

            var v1 = 0;
            var v2 = 0;
            var aux = false;

            for (var i = 1; cpf.length > i; i++) {
                if (cpf[i - 1] != cpf[i]) {
                    aux = true;
                }
            }

            if (aux == false) {
                return false;
            }

            for (var i = 0, p = 10; cpf.length - 2 > i; i++, p--) {
                v1 += cpf[i] * p;
            }

            v1 = (v1 * 10) % 11;

            if (v1 == 10) {
                v1 = 0;
            }

            if (v1 != cpf[9]) {
                return false;
            }

            for (var i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
                v2 += cpf[i] * p;
            }

            v2 = (v2 * 10) % 11;

            if (v2 == 10) {
                v2 = 0;
            }

            if (v2 != cpf[10]) {
                return false;
            } else {
                return true;
            }
        } else if (val.length == 18) {
            var cnpj = val.trim();

            cnpj = cnpj.replace(/\./g, "");
            cnpj = cnpj.replace("-", "");
            cnpj = cnpj.replace("/", "");
            cnpj = cnpj.split("");

            var v1 = 0;
            var v2 = 0;
            var aux = false;

            for (var i = 1; cnpj.length > i; i++) {
                if (cnpj[i - 1] != cnpj[i]) {
                    aux = true;
                }
            }

            if (aux == false) {
                return false;
            }

            for (var i = 0, p1 = 5, p2 = 13; cnpj.length - 2 > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                    v1 += cnpj[i] * p1;
                } else {
                    v1 += cnpj[i] * p2;
                }
            }

            v1 = v1 % 11;

            if (v1 < 2) {
                v1 = 0;
            } else {
                v1 = 11 - v1;
            }

            if (v1 != cnpj[12]) {
                return false;
            }

            for (var i = 0, p1 = 6, p2 = 14; cnpj.length - 1 > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                    v2 += cnpj[i] * p1;
                } else {
                    v2 += cnpj[i] * p2;
                }
            }

            v2 = v2 % 11;

            if (v2 < 2) {
                v2 = 0;
            } else {
                v2 = 11 - v2;
            }

            if (v2 != cnpj[13]) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    function validaTelefone(val) {
        val = val
            .replaceAll("(", "")
            .replaceAll(")", "")
            .replaceAll(" ", "")
            .replaceAll("-", "")
            .trim();
        if (val.length == 11) {
            return true;
        } else if (val.length == 10) {
            return true;
        } else {
            return false;
        }
    }

    function ifnull(a, b) {
        if (a === undefined || a === null) {
            return b;
        } else {
            return a;
        }
    };

    return (
        <AnimateSharedLayout>
            <ComponentFormIndisponivelContainer>
                <DadosProdutosContentDetalhesIndisponivel>
                    <DadosProdutosContentDetalhesIndisponivelContent require_razao={require_razao} layoutId='box-container'>
                    {/* h={require_razao && sizeHeight768px && sizeWidth1366px ? '530px' : require_razao ? '600px' : !require_razao && sizeHeight768px && sizeWidth1366px ? '490px' : '550px'} */}
                        <DetalhesIndisponivelContentHeader>
                            <DetalhesIndisponivelContentHeaderImg>
                                <img alt="produto-indisponivel" src={produtoIndisponivel} />
                            </DetalhesIndisponivelContentHeaderImg>
                            <DetalhesIndisponivelContentHeaderDesc>
                                <h3>
                                    A gente te avisa quando ele estiver <br />
                                    em nosso estoque. <br />
                                    Basta deixar seus dados aqui:
                                </h3>
                            </DetalhesIndisponivelContentHeaderDesc>
                        </DetalhesIndisponivelContentHeader>
                        <DetalhesIndisponivelContentForm>
                            <ComponentVStackContainer spacing={3} align='stretch' mx='auto'>

                                <ReactInputMask
                                    value={nome_parceiro}
                                    placeholder='* Nome'
                                    bgColor='#f5f5f5'
                                    onChange={(e) => setNomeParceiro(e.target.value)}
                                    style={{
                                        backgroundColor: "#f5f5f5",
                                        height: '40px',
                                        border: '0.3px solid rgb(0,0,0,0.1)',
                                        borderRadius: '5px',
                                        paddingLeft: '15px',
                                        outline: 'none'
                                    }}
                                />

                                <ReactInputMask
                                    value={cpf_cnpj_parceiro}
                                    placeholder='* CPF | CNPJ'
                                    bgColor='#f5f5f5'
                                    onChange={(e) => { setCPFCNPJParceiro(e.target.value); handleChangeCPFCNPJ(e.target.value) }}
                                    style={{
                                        backgroundColor: "#f5f5f5",
                                        height: '40px',
                                        border: '0.3px solid rgb(0,0,0,0.1)',
                                        borderRadius: '5px',
                                        paddingLeft: '15px',
                                        outline: 'none'
                                    }}
                                    mask={maskCPFCNPJ}
                                    maskChar=""
                                />

                                {require_razao ?
                                    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.1 }} h='40px'>
                                        <ReactInputMask
                                            placeholder='* Razão social'
                                            bgColor='#f5f5f5'
                                            value={razaoSocialParceiro}
                                            onChange={(e) => setRazaoSocialParceiro(e.target.value)}
                                            style={{
                                                backgroundColor: "#f5f5f5",
                                                height: '100%',
                                                marginTop: '-1px',
                                                border: '0.3px solid rgb(0,0,0,0.1)',
                                                borderRadius: '5px',
                                                paddingLeft: '15px',
                                                outline: 'none'
                                            }}
                                        />
                                    </MotionBox>
                                    : <></>
                                }

                                <ReactInputMask
                                    placeholder='* Telefone'
                                    bgColor='#f5f5f5'
                                    value={telefone_parceiro}
                                    onChange={(e) => { setTelefoneParceiro(e.target.value); handleTelefoneForm(e.target.value) }}
                                    style={{
                                        backgroundColor: "#f5f5f5",
                                        height: '40px',
                                        border: '0.3px solid rgb(0,0,0,0.1)',
                                        borderRadius: '5px',
                                        paddingLeft: '15px',
                                        outline: 'none'
                                    }}
                                    mask={maskTelefone}
                                    maskChar=""
                                />

                                <ReactInputMask
                                    placeholder='* E-mail'
                                    bgColor='#f5f5f5'
                                    value={email_parceiro}
                                    onChange={(e) => setEmailParceiro(e.target.value)}
                                    style={{
                                        backgroundColor: "#f5f5f5",
                                        height: '40px',
                                        border: '0.3px solid rgb(0,0,0,0.1)',
                                        borderRadius: '5px',
                                        paddingLeft: '15px',
                                        outline: 'none'
                                    }}
                                />

                            </ComponentVStackContainer>
                            <MotionBox initial={require_razao ? { opacity: 0 } : { opacity: 1 }} animate={require_razao ? { opacity: 1 } : { opacity: 1 }} transition={require_razao ? { delay: 0.3, duration: 0.3 } : { delay: 0.3, duration: 0.3 }}>
                                <DetalhesIndisponivelContentFormAvise isLoading={loading} onClick={() => salvarAvisoProdutoIndisponivel()}>
                                    ME AVISE QUANDO CHEGAR
                                </DetalhesIndisponivelContentFormAvise>
                                <DetalhesIndisponivelContentFormSimilares value={props.state.dados.url_categoria} onClick={(e) => (window.location.href = e.target.value)}>
                                    VER PRODUTOS SIMILARES
                                </DetalhesIndisponivelContentFormSimilares>
                            </MotionBox>
                        </DetalhesIndisponivelContentForm>
                    </DadosProdutosContentDetalhesIndisponivelContent>
                </DadosProdutosContentDetalhesIndisponivel>
            </ComponentFormIndisponivelContainer>
        </AnimateSharedLayout>
    )
}
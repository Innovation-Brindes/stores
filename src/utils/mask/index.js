export const cpf_cnpj_format = (value) => {
  if (value?.length > 11) {
    return value
      ?.replace(/\D/g, "")
      ?.replace(/(\d{2})(\d)/, "$1.$2")
      ?.replace(/(\d{3})(\d)/, "$1.$2")
      ?.replace(/(\d{3})(\d)/, "$1/$2")
      ?.replace(/(\d{4})(\d)/, "$1-$2")
      ?.replace(/(-\d{2})\d+?$/, "$1");
  } else {
    return value
      ?.replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      ?.replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      ?.replace(/(\d{3})(\d)/, "$1.$2")
      ?.replace(/(\d{3})(\d{1,2})/, "$1-$2")
      ?.replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }
};

export const cep_format = (value) => {
  return value
    ?.replace(/\D/g, "")
    ?.replace(/(\d{5})(\d)/, "$1-$2")
    ?.replace(/(-\d{3})\d+?$/, "$1");
};

export const telefone_format = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{0})(\d)/, "$1($2")
    .replace(/(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
};

export const validaCpfCnpj = (val) => {
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
};

export const validaTelefone = (val) => {
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
};

export const ifnull = (a, b) => {
  if (a === null || a === undefined || a === "") {
    return b;
  } else {
    return a;
  }
};

export function maskString(value, pattern) {
  if (!value || !pattern) return "--";
  let i = 0;
  const v = value.toString();
  return pattern.replace(/#/g, (_) => v[i++]).replace(/undefined/g, "");
}

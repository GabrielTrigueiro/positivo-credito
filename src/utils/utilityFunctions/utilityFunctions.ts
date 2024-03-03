function validarCpfCnpj(input: string): boolean {
  const cleanedInput = input.replace(/\D/g, "");
  if (cleanedInput.length === 11) {
    return validarCpf(cleanedInput);
  } else if (cleanedInput.length === 14) {
    return validarCnpj(cleanedInput);
  }
  return false;
}

function validarCpf(cpf: string): boolean {
  const numeros = cpf.substring(0, 9).split("").map(Number);
  const digitos = cpf.substring(9).split("").map(Number);
  const calcularDigito = (numeros: number[]): number => {
    let soma = 0;
    let multiplicador = numeros.length + 1;
    for (const numero of numeros) {
      soma += numero * multiplicador;
      multiplicador--;
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };
  const primeiroDigito = calcularDigito(numeros);
  const segundoDigito = calcularDigito([...numeros, primeiroDigito]);
  return digitos[0] === primeiroDigito && digitos[1] === segundoDigito;
}

function validarCnpj(cnpj: string): boolean {
  const numeros = cnpj.substring(0, 12).split("").map(Number);
  const digitos = cnpj.substring(12).split("").map(Number);
  const calcularDigito = (numeros: number[], multiplicador: number): number => {
    let soma = 0;
    for (const numero of numeros) {
      soma += numero * multiplicador;
      multiplicador = multiplicador === 2 ? 9 : multiplicador - 1;
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };
  const primeiroDigito = calcularDigito(numeros, 5);
  const segundoDigito = calcularDigito([...numeros, primeiroDigito], 6);
  return digitos[0] === primeiroDigito && digitos[1] === segundoDigito;
}

export const UtilityFunctions = {
  validarCpfCnpj
}
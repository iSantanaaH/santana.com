"use client";
import React, {
  createContext,
  useState,
  useRef,
  useContext,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  ChangeEvent,
} from "react";
import { CadastroContextProps } from "./cadastroContextTypes";
import axios from "axios";

export const CadastroContext = createContext({} as CadastroContextProps);

export const CadastroProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState<string>("");

  const [isCpfErrorEmpty, setCpfErrorEmpty] = useState<
    HTMLInputElement | string
  >("");
  const [isEmailErrorEmpty, setEmailErrorEmpty] = useState<
    HTMLInputElement | string
  >("");
  const [isPasswordErrorEmpty, setPasswordErrorEmpty] = useState<
    HTMLInputElement | string
  >("");
  const [isBirthdayErrorEmpty, setBirthdayErrorEmpty] = useState<
    HTMLInputElement | string
  >("");
  const [isPhoneErrorEmpty, setPhoneErrorEmpty] = useState<
    HTMLInputElement | string
  >("");
  const [isNameErrorEmpty, setNameErrorEmpty] = useState<
    HTMLInputElement | string
  >("");
  const [isGenderErrorEmpty, setGenderErrorEmpty] = useState<
    HTMLInputElement | string
  >("");

  const MENSAGEM_CAMPO_OBRIGATORIO = "Campo obrigatório";

  function handleValidateEmptyInputName(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = event.target.value;
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    } else {
      setName(value);
    }
    setNameErrorEmpty(mensagem);
  }

  // function FormatCpf(cpf: string): string {
  //   let valueInputCpf = refInputCpf.current?.value.trim();
  //   const cleanedCpf = cpf.replace(/\D/g, "");

  //   return (valueInputCpf = cleanedCpf.replace(
  //     /(\d{3})(\d{3})(\d{3})(\d{2})/,
  //     "$1.$2.$3-$4"
  //   ));
  // }

  // function ValidateEmptyInputCpf() {
  //   const value = refInputCpf.current?.value.trim();
  //   const Mensagem_CPF_Inválido = "Por favor, insira um CPF válido";
  //   let mensagem = "";

  //   if (!value) {
  //     mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
  //   } else if (value.length !== 11) {
  //     mensagem = Mensagem_CPF_Inválido;
  //   }
  //   setCpfErrorEmpty(mensagem);
  // }

  // function ValidateEmptyInputEmail() {
  //   const value = refInputEmail.current?.value.trim();
  //   let mensagem = "";

  //   if (!value) {
  //     mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
  //   }
  //   setEmailErrorEmpty(mensagem);
  // }

  // function ValidateEmptyInputPassword() {
  //   const value = refInputPasssword.current?.value.trim();
  //   const Mensagem_Senha_Inválida = "A senha deve conter no mínimo 12 dígitos";
  //   let mensagem = "";

  //   if (!value) {
  //     mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
  //   } else if (value.length < 12) {
  //     mensagem = Mensagem_Senha_Inválida;
  //   }
  //   setPasswordErrorEmpty(mensagem);
  // }

  // function ValidateEmptyInputsGender() {
  //   const valueInputGenderMan = refInputGenderMan.current?.checked;
  //   const valueInputGenderWoman = refInputGenderWoman.current?.checked;
  //   const valueInputGenderUninformed =
  //     refInputGenderUninformed.current?.checked;
  //   let mensagem = "";

  //   if (
  //     valueInputGenderMan ||
  //     valueInputGenderWoman ||
  //     valueInputGenderUninformed
  //   ) {
  //     setGenderErrorEmpty("");
  //     return;
  //   } else {
  //     mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
  //   }
  //   setGenderErrorEmpty(mensagem);
  // }

  // function ValidateEmptyInputBirthday() {
  //   const value = refInputBirthday.current?.value.trim();
  //   let mensagem = "";

  //   if (!value) {
  //     mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
  //   }
  //   setBirthdayErrorEmpty(mensagem);
  // }

  // function ValidateEmptyInputPhone() {
  //   const value = refInputPhone.current?.value.trim();
  //   let mensagem = "";

  //   if (!value) {
  //     mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
  //   }
  //   setPhoneErrorEmpty(mensagem);
  // }

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    // handleValidateEmptyInputName();
    // ValidateEmptyInputCpf();
    // ValidateEmptyInputEmail();
    // ValidateEmptyInputPassword();
    // ValidateEmptyInputsGender();
    // ValidateEmptyInputBirthday();
    // ValidateEmptyInputPhone();

    if (
      !isNameErrorEmpty &&
      !isCpfErrorEmpty &&
      !isEmailErrorEmpty &&
      !isGenderErrorEmpty &&
      !isBirthdayErrorEmpty &&
      !isPhoneErrorEmpty
    ) {
      try {
        // const name = refInputName.current?.value.trim();
        // const cpf = refInputCpf.current?.value.trim();
        // const email = refInputEmail.current?.value.trim();
        // const birthday = refInputBirthday.current?.value.trim();
        // const phone = refInputPhone.current?.value.trim();
        let gender = "";

        // if (refInputGenderMan.current?.checked) {
        //   gender = "Masculino";
        // } else if (refInputGenderWoman.current?.checked) {
        //   gender = "Feminino";
        // } else if (refInputGenderUninformed.current?.checked) {
        //   gender = "Não informado";
        // }

        const formData = {
          name,
          // cpf,
          // email,
          // gender,
          // birthday,
          // phone,
        };

        const response = await axios.post(
          "http://localhost:3333/minhaconta/cadastro",
          formData
        );

        if (response.status === 200) {
          // refFormRegister.current?.reset();
          console.log(response.data);
        } else {
          console.error(`Erro ao enviar o formulário ${response.status}`);
        }
      } catch (error: any) {
        console.error(error.message);
      }
    }
  }

  return (
    <CadastroContext.Provider
      value={{
        isCpfErrorEmpty,
        isEmailErrorEmpty,
        isPasswordErrorEmpty,
        isGenderErrorEmpty,
        isBirthdayErrorEmpty,
        isPhoneErrorEmpty,
        isNameErrorEmpty,
        setNameErrorEmpty,
        setCpfErrorEmpty,
        setEmailErrorEmpty,
        setPasswordErrorEmpty,
        setGenderErrorEmpty,
        setBirthdayErrorEmpty,
        setPhoneErrorEmpty,
        handleValidateEmptyInputName,
        // ValidateEmptyInputCpf,
        // ValidateEmptyInputEmail,
        // ValidateEmptyInputPassword,
        // ValidateEmptyInputsGender,
        // ValidateEmptyInputBirthday,
        // ValidateEmptyInputPhone,
        handleSubmit,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};

export const useCadatroContext = () => useContext(CadastroContext);

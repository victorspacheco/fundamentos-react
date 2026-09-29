import "./index.css";
import { useEffect, useState } from "react";


export function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  
  function FormValidation() {

    if (name.length < 3) {
      console.log("O nome precisa ter mais de 3 caracteres")
      return false
    }

    if (!email.includes("@")) {
      console.log("O email precisa ser um email válido")
      return false
    }

    if (password.length !== 6) {
      console.log("A senha precisa ser maior que 6 caracteres")
      return false
    }

    if (password !== confirmPassword) {
      console.log("As senhas não são iguais")
      return false
    }

    return true

  }
  
  useEffect(() => {
    setIsFormValid(FormValidation)
  }, [name, email, password, confirmPassword])

  function handleClick() {
    console.log(name, email, password, confirmPassword)
  }

  return (
    <div className="flex flex-col items-center min-h-screen pt-10">
      <div className="flex flex-col gap-6 w-full max-w-96 p-6">
        <h1 className="text-2xl text-slate-800 font-medium">Formulário de cadastro</h1>
        <div className="flex flex-col gap-3 w-full">

          <div className="flex flex-col gap-1 w-full">
            <span className="text-sm text-slate-700">Nome</span>
            <input 
              type="text" 
              id="name" 
              value={name} 
              placeholder="Ex: Bruce Wayne" 
              required
              onChange={(e) => {setName(e.target.value)}}
              />
              <span
              className="text-sm text-red-700"
              >
                {name.length < 3 && name.length !== 0 ? "Nome precisa ter mais de 3 caracteres": ""}
              </span>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <span className="text-sm text-slate-700">Email</span>
            <input 
              type="text" 
              id="name" 
              value={email}
              placeholder="Ex: bruce.w@waynenterprises.com" 
              onChange={(e) => {setEmail(e.target.value)}}
              required/>
              <span className="text-sm text-red-700">
                {!email.includes("@") && email.length !== 0 ? "digite um email válido" : ""}
              </span>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <span className="text-sm text-slate-700">Senha</span>
            <input 
              type="text" 
              id="name" 
              value={password}
              placeholder="*******" 
              onChange={(e) => {setPassword(e.target.value)}}
              required/>
              <span className="text-sm text-red-700">
                {password.length < 6 && password.length !== 0 ? "A senha deve ter ao menos 6 caracteres" : ""}
              </span>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <span className="text-sm text-slate-700">Confirmação de senha</span>
            <input 
              type="text" 
              id="name" 
              value={confirmPassword}
              placeholder="*******" 
              onChange={(e) => {setConfirmPassword(e.target.value)}}
              required/>
              <span className="text-sm text-red-700">
                {password !== confirmPassword && confirmPassword.length !== 0 ? "As senhas devem ser iguais" : ""}
              </span>
          </div>

          <div className="flex pt-1 w-full">
            <button 
              type="submit" 
              className="w-full bg-sky-700 text-white rounded-md p-2 transition-colors duration-75 
               enabled:hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handleClick()}
              disabled={!isFormValid}
              >
                Validar
              </button>
              <span className="text-xs text-green-700">
                {isFormValid === true ? "Formu;ário pronto para ser enviado" : ""}
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

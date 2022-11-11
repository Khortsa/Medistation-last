import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import Button from '../components/Button'
import PasswordChecklist from "react-password-checklist"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password, cpassword)
  }
  
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3 className="mb-4">S'inscrire</h3>
      <label>Email:</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="mb-2" autoComplete="off" placeholder="votre email" />
      <label>Mot de passe:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="mb-2" autoComplete="off" placeholder="Mot de passe " />
      <label>Mot de passe:</label>
      <input type="password" onChange={(e) => setCpassword(e.target.value)} value={cpassword} className="mb-4" autoComplete="off" placeholder="Confirmer  " />
      <PasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={8}
				value={password}
				valueAgain={cpassword}
				messages={{
					minLength: "Must have 8 caracteres.",
					specialChar: "Must contain caracter special.",
					number: "Must have a number.",
					capital: "Must have a majuscule.",
					match: "Password should match with the confirm password.",
				}}
			/>
      <Button disabled={isLoading} className="btn btn-success me-4 d-flex justify-content-center" children="S'inscrire" />
      {error && <div className="error">{error}</div>}
    </form>  
  )
}
export default Signup
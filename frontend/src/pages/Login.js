import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import Button from '../components/Button'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3 className="mb-4">Connexion </h3>
      <label>Email :</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="mb-2" autoComplete="off" placeholder="votre email" />
      <label>Mot de passe:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="mb-4" autoComplete="off" placeholder="Mot de passe" />

      <Button disabled={isLoading} className="btn btn-success me-4" children="Se connecter" />
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login
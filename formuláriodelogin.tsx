"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log("Login attempt", { email, password, rememberMe })
    router.push("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail do Usuário"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <p className="text-xs text-gray-500 mt-1">*O campo e-mail de usuário é de caráter obrigatório.</p>
      </div>
      <div className="mb-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha do Usuário"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <p className="text-xs text-gray-500 mt-1">*O campo senha do usuário é de caráter obrigatório.</p>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="mr-2"
          />
          <span className="text-sm text-gray-600">Lembrar-me</span>
        </label>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Entrar
      </button>
    </form>
  )
}


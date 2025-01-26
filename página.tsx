import Image from "next/image"
import Link from "next/link"
import LoginForm from "@/components/LoginForm"

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <div className="logo-container text-center">
          <Image src="/Logomarca2.jpg" alt="Logomarca" width={200} height={200} />
          <h1 className="text-3xl font-bold text-gray-800">Teela</h1>
          <h2 className="text-xl text-gray-600">Gerenciamento de Ordem de Serviço</h2>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="login-frame w-full max-w-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Faça seu Login</h3>
          <LoginForm />
          <p className="mt-4 text-sm text-center">
            Não possui conta?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}


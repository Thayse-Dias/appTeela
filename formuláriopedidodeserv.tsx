"use client"

import { useState } from "react"

export default function ServiceOrderForm() {
  const [formData, setFormData] = useState({
    data_atual: "",
    local_atendimento: "",
    descricao_servico: "",
    setor: "",
    observacoes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement service order submission logic
    console.log("Service order submitted", formData)
    // Reset form after submission
    setFormData({
      data_atual: "",
      local_atendimento: "",
      descricao_servico: "",
      setor: "",
      observacoes: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="data_atual" className="block text-sm font-medium">
          Data de Abertura:
        </label>
        <input
          type="date"
          id="data_atual"
          name="data_atual"
          value={formData.data_atual}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="local_atendimento" className="block text-sm font-medium">
          Local de Atendimento:
        </label>
        <input
          type="text"
          id="local_atendimento"
          name="local_atendimento"
          value={formData.local_atendimento}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="descricao_servico" className="block text-sm font-medium">
          Descrição do Serviço:
        </label>
        <input
          type="text"
          id="descricao_servico"
          name="descricao_servico"
          value={formData.descricao_servico}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="setor" className="block text-sm font-medium">
          Setor Solicitante:
        </label>
        <select
          id="setor"
          name="setor"
          value={formData.setor}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Selecione um setor</option>
          <option value="Ger.Operacional">Ger. Operacional</option>
          <option value="Recepção">Recepção</option>
          <option value="Governança">Governança</option>
          <option value="Manutenção">Manutenção</option>
          <option value="A&B">A&B</option>
          <option value="Eventos">Eventos</option>
          <option value="TI">TI</option>
        </select>
      </div>
      <div>
        <label htmlFor="observacoes" className="block text-sm font-medium">
          Observações:
        </label>
        <textarea
          id="observacoes"
          name="observacoes"
          value={formData.observacoes}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows={3}
        ></textarea>
      </div>
      <div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Salvar
        </button>
      </div>
    </form>
  )
}


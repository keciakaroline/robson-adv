import React from 'react'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-900">
      <ul className="flex">
        <li className="p-4">
          <Link
            href="/"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            <h1>Inicio</h1>
          </Link>
        </li>
        <li className="p-4">
          <a
            href="/sobre"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Sobre nós
          </a>
        </li>
        <li className="p-4">
          <a
            href="/atuacao"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Áreas de Atuacao
          </a>
        </li>
        <li className="p-4">
          <a
            href="/contato"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}

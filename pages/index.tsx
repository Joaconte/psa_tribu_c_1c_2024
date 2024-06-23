import { useRouter } from "next/router";

export default function Home() {
  
  const router = useRouter();
  return (
    <div className="flex h-full flex-col justify-center items-center bg-white p-10">
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center max-w-2xl">
      <p className="text-2xl mb-4">Bienvenidos a PSA</p>
      <p className="text-lg mb-4">¿Quienes somos?</p>
      <p className="text-base">
        Praxis Systems Argentina (PSA) es una compañía de desarrollo y venta de software empresarial con base en Buenos Aires y clientes en la Sudamérica de habla hispana. Con poco más de quince años en el mercado, una facturación anual cercana a los u$s 20 M, una dotación de 450 empleados y oficinas en Buenos Aires, Santiago de Chile y Lima, PSA se ha consolidado como un proveedor muy competitivo en el difícil segmento de productos ERP (Enterprise Resource Planning), CRM (Customer Relationship Management) y BI (Business Intelligence) para empresas medianas y medianas/grandes.
      </p>
    </div>
    <div className="mt-10 text-center">
      <label className="block mb-5 text-xl font-semibold">Seleccionar módulo a utilizar</label>
      <div className="flex space-x-5 justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => router.push("/proyectos")}
        >
          Proyectos
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => router.push("/soporte")}
        >
          Soporte
        </button>
      </div>
    </div>
  </div>
  )
}

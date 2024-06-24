import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loadingScreen";

export default function Proyectos() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una llamada de datos con un timeout
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Módulo en proceso</h1>
        <p className="text-lg text-gray-600">Estamos trabajando. Vuelva pronto.</p>
        <div className="mt-6">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/under-construction.png"
            alt="Página en proceso de creación"
            className="mx-auto mb-6"
          />
        </div>
        <div className="mt-6">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

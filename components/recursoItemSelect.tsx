export default function RecursoItemSelect({ recurso }: {recurso: any}) {
  return (
      <option key={`${recurso['legajo']}`}>{recurso['Nombre'] +" "+ recurso['Apellido']}</option>
  )
}

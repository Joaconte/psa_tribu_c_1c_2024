export default function RecursoItemSelect({ recurso }: {recurso: any}) {
  return (
      <label>{recurso['Nombre'] +" "+ recurso['Apellido']}</label>
  )
}

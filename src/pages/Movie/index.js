import DefaultLayout from 'components/DefaultLayout'
import { useParams } from 'react-router-dom'

export default function Movie () {
  const { movieId } = useParams()

  return <DefaultLayout>{movieId}</DefaultLayout>
}

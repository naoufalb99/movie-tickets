import * as Yup from 'yup'

const labels = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'E-mail',
  phone: 'Phone'
}

const phoneRegExp = /^0?\s*[5-8](?:[\s.-]*\d{2}){4}$/

export default Yup.object().shape({
  firstName: Yup.string().required().label(labels.firstName),
  lastName: Yup.string().required().label(labels.lastName),
  email: Yup.string().required().email().label(labels.email),
  phone: Yup.string()
    .matches(
      phoneRegExp,
      'Invalid phone number'
    )
    .required('Phone number is required')
})

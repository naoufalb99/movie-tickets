import clsx from 'clsx'
import { Field } from 'formik'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default function Input ({ type = 'text', name, className, ...props }) {
  const classes = useStyles()

  const classNames = clsx(classes.input, className)

  return (
    <Field name={name}>
      {({
        field,
        meta
      }) => {
        const isErrored = meta.touched && meta.error
        return (
          <div>
            <input
              type={type}
              className={clsx(classNames, isErrored && classes.inputError)}
              {...field}
              {...props}
            />
            {isErrored && (
              <div className={classes.errorMessage}>{meta.error}</div>
            )}
          </div>
        )
      }}
    </Field>
  )
}

export default ({
  container: {
    border: '1px solid #EEE',
    padding: 8,
    borderRadius: 3
  },
  title: {
    borderBottom: '1px solid #EEE',
    paddingBottom: 8,
    marginBottom: 16,
    fontWeight: 500,
    fontSize: '1.1rem'
  },
  formGroup2Cols: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16
  },
  phoneInputWrapper: {
    position: 'relative'
  },
  phonePrefix: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: 8,
    paddingRight: 8,
    borderRight: '1px solid #AAA'
  },
  phoneInput: {
    paddingLeft: 58
  }
})

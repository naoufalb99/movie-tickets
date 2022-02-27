export default ({
  input: {
    height: 40,
    width: '100%',
    padding: 16,
    // borderRadius: 3
    fontFamily: 'inherit',
    border: '1px solid #AAA',
    borderRadius: 3,
    fontSize: '.9rem'
  },
  inputError: {
    borderColor: 'red',
    color: 'red',
    '&::placeholder': {
      color: 'red'
    }
  },
  errorMessage: {
    color: 'red',
    marginTop: 4,
    fontSize: '.9rem'
  }
})

export default ({
  button: {
    height: 36,
    borderRadius: 999,
    border: 'none',
    padding: '0 24px 0 24px',
    cursor: 'pointer',
    fontWeight: 700,
    fontFamily: 'inherit',
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    color: ({ textColor }) => textColor,
    transition: 'transform ease .3s',
    '&:hover': {
      transform: 'scale(1.02)'
    }
  }
})

import ui from 'constants/ui'

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
  totalPrice: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 8,
    marginTop: 16,
    borderTop: '1px solid #EEE'
  },
  cartItem: {
    display: 'flex',
    gap: 8,
    marginBottom: 16,
    '&:last-child': {
      marginBottom: 0
    }
  },
  cartItemImage: {
    width: 75,
    height: 112
  },
  cartItemTitle: {
    fontSize: '1.1rem',
    fontWeight: 500,
    color: ui.PRIMARY_COLOR
  },
  cartItemPrice: {
    color: ui.ACCENT_COLOR,
    marginTop: 8
  },
  cartItemDate: {
    fontSize: '0.8rem',
    color: ui.PRIMARY_COLOR,
    opacity: 0.8
  }
})

import ui from 'constants/ui'

export default ({
  container: {
    paddingTop: 24,
    paddingBottom: 24
  },
  inner: {
    marginTop: 32,
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    gap: 24
  },
  emptyCart: {
    textAlign: 'center',
    padding: 32,
    marginTop: 120
  },
  emptyCartImage: {
    width: 300,
    maxWidth: '90%'
  },
  emptyCartTitle: {
    color: ui.ACCENT_COLOR,
    fontSize: '1.4rem',
    marginTop: 24,
    fontWeight: 600
  },
  emptyCartCaption: {
    marginTop: 16,
    color: ui.PRIMARY_COLOR,
    opacity: 0.7,
    marginBottom: 24
  }
})

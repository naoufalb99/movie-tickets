import ui from 'constants/ui'

export default ({
  wrapper: {
    display: 'flex',
    gap: '64px',
    alignItems: 'center'
  },
  date: {
    lineHeight: 1.2,
    color: '#FFF',
    fontSize: '1.1em',
    padding: '32px 0',
    width: 100
  },
  day: {
    fontWeight: 700,
    fontSize: '2.2em'
  },
  hoursItem: {
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: '1rem',
    border: '1px solid #FFF',
    borderRadius: '5px',
    color: '#FFF',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'border-color ease .2s, background-color ease .2s',
    '&:hover': {
      backgroundColor: `${ui.ACCENT_COLOR}`,
      borderColor: `${ui.ACCENT_COLOR}`
    }
  },
  hoursItemSelected: {
    backgroundColor: `${ui.ACCENT_COLOR}`,
    borderColor: `${ui.ACCENT_COLOR}`
  },
  hours: {
    display: 'flex',
    gap: '16px'
  }
})

import ui from 'constants/ui'

export default ({
  wrapper: {
    position: 'relative',
    minHeight: `calc(100vh - ${ui.HEADER_HEIGHT}px)`,
    backgroundSize: 'cover',
    padding: '64px 0',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, .6)',
      boxShadow: 'inset  0 -300px 260px -80px #000'
    }
  },
  inner: {
    position: 'relative'
  },
  title: {
    color: '#FFF',
    fontSize: '3em',
    '&:after': {
      content: '"."',
      color: `${ui.ACCENT_COLOR}`
    }
  },
  people: {
    display: 'flex',
    gap: '64px',
    color: '#FFF',
    marginTop: '1.6em'
  },
  profile: {
    '& > h4': {
      fontSize: '1.1em'
    },
    '& > p': {
      fontSize: '.94em',
      color: 'rgba(255, 255, 255, .7)'
    }
  },
  date: {
    marginTop: '16px',
    color: 'rgba(255, 255, 255, .8)'
  },
  schedules: {
    marginTop: 40
  },
  nextBar: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, .2)',
    display: 'flex',
    alignItems: 'center'
  },
  nextBarContainer: {
    display: 'flex',
    justifyContent: 'right'
  },
  price: {
    paddingLeft: 16,
    marginLeft: 16,
    borderLeft: '1px solid rgba(255, 255, 255, .4)'
  }
})

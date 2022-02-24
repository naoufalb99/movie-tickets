import ui from 'constants/ui'

export default ({
  header: {
    height: ui.HEADER_HEIGHT,
    backgroundColor: '#E3D9D1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: {
      left: 16, right: 16
    }
  },
  logo: {
    fontWeight: 700,
    position: 'relative',
    '& span': {
      cursor: 'pointer',
      position: 'relative',
      zIndex: 2
    },
    '&:before': {
      zIndex: 1,
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 31,
      backgroundColor: '#E5352C'
    }
  }
})

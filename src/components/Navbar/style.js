import ui from 'constants/ui'

export default ({
  navbar: {

  },
  activeLink: {},
  list: {
    '& li': {
      display: 'inline-block',
      margin: {
        left: 32
      },
      '&:first-child': {
        marginLeft: 0
      }
    },
    '& $activeLink': {
      color: ui.ACCENT_COLOR
    },
    '& a': {
      color: '#111'
    }
  }

})

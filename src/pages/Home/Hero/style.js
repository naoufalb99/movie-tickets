import ui from 'constants/ui'

export default ({
  hero: {
    position: 'relative',
    height: `calc(100vh - ${ui.HEADER_HEIGHT}px)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bg: {
    position: 'absolute',
    backgroundImage: 'url(\'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg\')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, .3)'
    }
  },
  inner: {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    width: 900,
    marginTop: 200
  },
  date: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, .8)'
  },
  title: {
    fontSize: 40,
    fontWeight: 700
  },
  buttonContainer: {
    display: 'flex',
    gap: 16,
    marginTop: 24
  }
})

export default ({
  movie: {
    height: 225,
    width: 150,
    background: 'url(\'https://www.themoviedb.org/t/p/w1280/5NYdSAnDVIXePrSG2dznHdiibMk.jpg\')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 4,
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05) translateY(-4px)'
    }
  }
})

const mapboxgl = require('mapbox-gl')

const newMarker = (type, coords) => {
  const markerEle = document.createElement('div')
  markerEle.style.width = '32px'
  markerEle.style.height = '39px'
  switch(type){
    case 'hotel':
      markerEle.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)'
    break
    case 'restaurant':
      markerEle.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)'
    break
    default:
      markerEle.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'
  }
  const marker = new mapboxgl.Marker(markerEle).setLngLat(coords)
  return marker
}

module.exports = newMarker

function changeImage(state) {
    const img = document.getElementById('mainImage');
    if (state === 'standing') {
      img.src = 'images/standing.png';
    } else if (state === 'walking') {
      img.src = 'images/walking.png';
    }
  }
        
        
        
        
        
      
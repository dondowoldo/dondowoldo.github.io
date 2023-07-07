let image1 = {
    photo: 'images/photo1.jpg',
    title: 'Boat on a lake',
    description: 'Peaceful ocean with an abandoned boat during beautiful sunset.'
};

let image2 = {
  photo: 'images/photo2.jpg',
  title: 'Cloudy Sunset',
  description: 'Another sunset on a cloudy day capturing boats on the lake.'
};

let image3 = {
  photo: 'images/photo3.jpg',
  title: 'Tree',
  description: 'Stunning large tree during sunset on the hill by the ocean.'
};

let image4 = {
  photo: 'images/photo4.jpg',
  title: 'Thailand Beach',
  description: 'Beautiful empty beach on a cloudy day with tall palms along the shore.'
};

let image5 = {
  photo: 'images/photo5.jpg',
  title: 'French Polynesia',
  description: 'Crystal clear water on one of the islands in Polynesia on a sunny day.'
};

let image6 = {
  photo: 'images/photo6.jpg',
  title: 'Lago di Braies',
  description: 'Beautiful Italian lake captured on a bright day with mirrory water.'
};


let photos = [image1, image2, image3, image4, image5, image6]
let photoCount = photos.length
let currentPhoto = 0

$('#photo').attr('src', photos[currentPhoto].photo);
$('#photo-title').text(photos[currentPhoto].title)
$('')

let loadPhoto = (currentPhoto) => {
  $('#photo').attr('src', photos[currentPhoto].photo);
  $('#photo-title').text(photos[currentPhoto].title);
  $('#photo-description').text(photos[currentPhoto].description);
  $('.small_img').css({transform: 'scale(1)'});
  $(`.small_img[data-index="${currentPhoto}"`).css({transform: 'scale(1.2)'});

}

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
  if (currentPhoto < photoCount - 1) {
    currentPhoto++;
    loadPhoto(currentPhoto)
  }
  else if (currentPhoto === photoCount - 1) {
    currentPhoto = 0;
    loadPhoto(currentPhoto);
  }
})

$('#left-arrow').click(() => {
  if (currentPhoto === 0) {
    currentPhoto = photoCount - 1;
    loadPhoto(currentPhoto);
  }
  else {
    currentPhoto--;
    loadPhoto(currentPhoto);
  }
})

photos.forEach((img, index) => {
  $('.preview').append(`\
  <div class="thumbnail">\
    <div class="popDescription">${img.title}</div>
    <img class="small_img" src="${img.photo}" data-index="${index}">\
  </div>`)
})

$('.small_img').on('click', function() {
  currentPhoto = $(this).index('.small_img');
  loadPhoto(currentPhoto);
})
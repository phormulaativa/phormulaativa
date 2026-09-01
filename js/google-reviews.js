const REVIEWS_URL = "/js/reviews.json";


const params = new URLSearchParams(
  window.location.search
);

const produtoIdAtual =
  params.get("id");


fetch(REVIEWS_URL)
.then(r => r.json())
.then(reviews => {

  const reviewsDoProduto =
    reviews.filter(review =>
      String(review.produtoId) ===
      String(produtoIdAtual)
    );

  if (reviewsDoProduto.length === 0) {
  track.innerHTML = '';
  dotsCont.innerHTML = '';
  return;
}

  const track =
    document.querySelector('#testimonials .tc-track');

  const dotsCont =
    document.querySelector('#testimonials .tc-dots');

  const prev =
    document.querySelector('#testimonials .tc-prev');

  const next =
    document.querySelector('#testimonials .tc-next');

  track.innerHTML = '';
  dotsCont.innerHTML = '';

  reviewsDoProduto.forEach((review, index) => {

    const slide =
      document.createElement('div');

    slide.className = 'tc-slide';

    if(index === 0){
      slide.classList.add('active');
    }

    slide.innerHTML = `
<div class="review-card">

  <div class="review-header">

    <div class="review-avatar">
      ${review.nome.charAt(0).toUpperCase()}
    </div>

    <div class="review-user">

      <h3>${review.nome}</h3>

    </div>
  </div>

  <div class="stars">
    ${'★'.repeat(review.nota)}
  </div>

  <p class="review-text">
    "${review.comentario}"
  </p>

</div>
`;

    track.appendChild(slide);

    const dot =
      document.createElement('div');

    dot.className = 'tc-dot';

    if(index === 0){
      dot.classList.add('active');
    }

    dotsCont.appendChild(dot);

  });

  const slides =
    [...document.querySelectorAll('.tc-slide')];

  const dots =
    [...document.querySelectorAll('.tc-dot')];

  if(slides.length <= 1){
    return;
  }

  let current = 0;

  function goTo(index){

    slides.forEach(slide =>
      slide.classList.remove('active')
    );

    dots.forEach(dot =>
      dot.classList.remove('active')
    );

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    current = index;
  }

  next.addEventListener('click', ()=>{

    let i = current + 1;

    if(i >= slides.length){
      i = 0;
    }

    goTo(i);

  });

  prev.addEventListener('click', ()=>{

    let i = current - 1;

    if(i < 0){
      i = slides.length - 1;
    }

    goTo(i);

  });

  dots.forEach((dot,index)=>{

    dot.addEventListener('click', ()=>{

      goTo(index);

    });

  });

});

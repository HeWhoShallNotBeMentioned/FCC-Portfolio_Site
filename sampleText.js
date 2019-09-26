const tempLiteralSample = `<div
class="col-md-4 projects"
data-tags=${proj.dataTags}
>
<div class="card">
  <img
    class="card-img-top img-fluid"
    src=${proj.imageSrc}
    alt=${proj.alt}
  />
  <div class="card-block">
    <h4 class="card-title">${proj.h4Title}</h4>
    <p class="card-text">
    ${proj.pBodyText}
    </p>
    <a
      href=${proj.webUrlLink}
      class="card-link"
      target="_blank"
      >${proj.webUrlLabel}</a
    >
    <a
      href=${proj.gitUrlLink}
      class="card-link"
      target="_blank"
      >${proj.gitUrlLabel}</a
    </a>
  </div>
</div>
</div>`;

{
  dataTags:  ,
  imageSrc: ,
  alt: ,
  h4Title: ,
  pBodyText: ,
  webUrlLink: ,
  webUrlLabel: "Website" ,
  gitUrlLink: ,
  gitUrlLabel: "Github" ,

},

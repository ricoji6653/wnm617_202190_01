
const makeAnimalList = templater((o)=>`
<div class="animallist-item">
<div class="display-flex animal-jump" data-id="${o.id}">
   <div class="flex-none animallist-item-image">
      <img src="${o.img}" alt="">
   </div>
   <div class="flex-stretch animallist-item-body padding-md">
      <div class="animallist-item-name">${o.name}</div>
      <div class="animallist-item-type"><strong>Type</strong> ${o.type}</div>
      <div class="animallist-item-breed"><strong>Breed</strong> ${o.breed}</div>
   </div>
</div>
</div>
`);


const makeUserProfile = (o) => `
<div class="user-profile-image">
   <img src="${o.img}" alt="">
</div>
<div>
   <h2>${o.name}</h2>
   <h3>&commat;${o.username}</h3>
   <div><a href="#page-user-settings">Settings</a></div>
</div>
`;

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




const makeAnimalProfile = (o) => `
<div>
   <h2>${o.name}</h2>
   <div><strong>type</strong> ${o.type}</div>
   <div><strong>breed</strong> ${o.breed}</div>
   <div><strong>description</strong> <p>${o.description}</p></div>
</div>
`;

const makeAnimalPopup = o => `
<div class="display-flex animal-jump" data-id="${o.animal_id}">
   <div class="flex-none animal-popup-image">
      <img src="${o.img}" alt="">
   </div>
   <div class="flex-stretch animal-popup-body padding-md">
      <div class="animal-popup-name">${o.name}</div>
      <div class="animal-popup-type"><strong>Type</strong> ${o.type}</div>
      <div class="animal-popup-breed"><strong>Breed</strong> ${o.breed}</div>
   </div>
</div>
`;



const FormControlInput = ({namespace,name,displayname,type,placeholder,value}) => `
<div class="form-control">
   <label for="${namespace}-${name}" class="form-label">${displayname}</label>
   <input type="${type}" id="${namespace}-${name}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
</div>
`;
const FormControlTextarea = ({namespace,name,displayname,placeholder,value}) => `
<div class="form-control">
   <label for="${namespace}-${name}" class="form-label">${displayname}</label>
   <textarea id="${namespace}-${name}" class="form-input" data-role="none" placeholder="${placeholder}">${value}</textarea>
</div>
`;


const makeAnimalFormInputs = (o,namespace) => `
${FormControlInput({
   namespace:namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type The Animal Name",
   value:o.name
})}
${FormControlInput({
   namespace:namespace,
   name:"type",
   displayname:"Type",
   type:"text",
   placeholder:"Type The Animal Type",
   value:o.type
})}
${FormControlInput({
   namespace:namespace,
   name:"breed",
   displayname:"Breed",
   type:"text",
   placeholder:"Type The Animal Breed",
   value:o.breed
})}
${FormControlTextarea({
   namespace:namespace,
   name:"description",
   displayname:"Description",
   placeholder:"Type The Animal Description",
   value:o.description
})}
`;


const makeUserFormInputs = (o,namespace) => `
${FormControlInput({
   namespace:namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type The User Name",
   value:o.name
})}
${FormControlInput({
   namespace:namespace,
   name:"username",
   displayname:"Username",
   type:"text",
   placeholder:"Type The User Handle",
   value:o.username
})}
${FormControlInput({
   namespace:namespace,
   name:"email",
   displayname:"Email",
   type:"email",
   placeholder:"Type The Email Address",
   value:o.email
})}
`;




const makeAnimalChoiceSelect = ({animals,name,chosen=0}) => `
<select id="${name}">
   ${templater(o=>`
      <option value="${o.id}" ${o.id===chosen?'selected':''}>${o.name}</option>
   `)(animals)}
</select>
`;


const makeAnimalListSet = (arr,target="#page-list .animallist") => {
   $(".filter-bar").html(makeFilterList(arr));
   $(target).html(makeAnimalList(arr));
}

const capitalize = s => s[0].toUpperCase()+s.substr(1);

const filterList = (animals,type) => {
   let a = [...(new Set(animals.map(o=>o[type])))];
   return templater(o=>o?`<a href="#" data-filter="${type}" data-value="${o}">${capitalize(o)}</a>`:'')(a);
}


const makeFilterList = (animals) => {
   return `
   <a href="#" data-filter="type" data-value="">All</a>
   <div>|</div>
   ${filterList(animals,'type')}
   <div>|</div>
   ${filterList(animals,'breed')}
   `;
}
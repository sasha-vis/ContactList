const contactList = document.querySelector('.contact_list');
const buttonEdit = document.querySelector('[type="button"]');

const inputName = document.querySelector('[name="name"]');
const inputMail = document.querySelector('[name="mail"]');
const inputPhone = document.querySelector('[name="phone"]');

let editElem = null;

buttonEdit.addEventListener('click', function() {
    if (inputName.value != '' && inputMail.value != '' && inputPhone.value != '') {
        const liContact = document.createElement('li');
        contactList.appendChild(liContact);

        const liContactInfo = document.createElement('div');
        liContactInfo.classList.add('info');
        liContact.appendChild(liContactInfo);
        const liContactDelete = document.createElement('div');
        liContactDelete.classList.add('delete');
        liContact.appendChild(liContactDelete);

        const liContactInfoName = document.createElement('div');
        liContactInfoName.innerHTML = inputName.value;
        liContactInfo.appendChild(liContactInfoName);
        const liContactInfoMail = document.createElement('div');
        liContactInfoMail.innerHTML = inputMail.value;
        liContactInfo.appendChild(liContactInfoMail);
        const liContactInfoPhone = document.createElement('div');
        liContactInfoPhone.innerHTML = inputPhone.value;
        liContactInfo.appendChild(liContactInfoPhone);

        const liContactDeleteCross = document.createElement('div');
        liContactDeleteCross.classList.add('cross');
        liContactDelete.appendChild(liContactDeleteCross);

        inputName.value = '';
        inputMail.value = '';
        inputPhone.value = '';

        liContactDelete.addEventListener('click', function() {
            liContact.remove();
        });
    } else alert('Не хватает данных');
});


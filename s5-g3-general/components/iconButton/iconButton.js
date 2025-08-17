/*
  Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek 'IconButton' isimli bir fonksiyon yazın.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  'IconButton' fonksiyonu 3 argüman alacak: 
  - btnText: butonun içindeki metin
  - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
  - iconClass: FontAwesome kütüphanesi icon class ismi 

*/
const IconButton = (btText, btColor, iClass) => {
  const button = document.createElement('button');
  const i = document.createElement('i');
  const node = document.createTextNode(btText);

  button.classList.add('btn', `btn-${btColor}`);
  i.className = iClass;
  button.appendChild(i);

  button.appendChild(node);
  return button;
};
const btObj = [
  { btnText: 'Aç', btnColor: 'blue', iconClass: 'fa fa-folder-open' },
  { btnText: 'Düzenle', btnColor: 'orange', iconClass: 'fa fa-pen' },
  { btnText: 'Sil', btnColor: 'red', iconClass: 'fa fa-trash' },
];

btObj.forEach((item) => {
  const create = IconButton(item.btnText, item.btnColor, item.iconClass);
  document.getElementById('icon-buttons').appendChild(create);
});

/*
Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun: 

    1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: 'Sil', btnColor: 'red', iconClass: 'fa fa-trash' }

Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin

*/

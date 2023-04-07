const buttonBefore = document.querySelector('.switcher__button--before');
const buttonAfter = document.querySelector('.switcher__button--after');
const imageBefore = document.querySelector('.example__image--before');
const imageAfter = document.querySelector('.example__image--after');
const switcher = document.querySelector('.switcher');
const switcherRange = document.querySelector('.switcher__range');
const slider = document.querySelector('.example__images');
const activeImage = 'example__image--active';
const switcherBefore = 'switcher--before';
const switcherAfter = 'switcher--after';

// Переменная с процентом для ширины изображений в слайдере
// const switcherValue = 100 - switcherRange.value;

// Изменяем стили слайдера при загрузке страницы
switcherRange.value = 53;
slider.style.gridTemplateColumns = '47% 1fr';

// Функция для изменения слайдера в зависимости от размера экрана

function handleViewportChange() {
  if (window.matchMedia('(min-width: 768px)').matches) {

    buttonBefore.onclick = () => {
      slider.style.transition = 'grid-template-columns 0.5s'
      slider.style.gridTemplateColumns = '100% 1fr';
      switcherRange.value = 0;
    };

    buttonAfter.onclick = () => {
      slider.style.transition = 'grid-template-columns 0.5s'
      slider.style.gridTemplateColumns = '0 1fr';
      switcherRange.value = 100;
    };

    switcherRange.addEventListener('input', (event) => {
      slider.style.transition = 'initial';
      // slider.style.gridTemplateColumns = `${switcherValue}% 1fr`;
      slider.style.gridTemplateColumns = `${100 - event.target.value}% 1fr`;
    });

  } else {

    buttonBefore.onclick = () => {
      imageAfter.classList.remove(activeImage);
      imageBefore.classList.add(activeImage);
      switcher.classList.remove(switcherAfter);
      switcher.classList.add(switcherBefore);
    }

    buttonAfter.onclick = () => {
      imageBefore.classList.remove(activeImage);
      imageAfter.classList.add(activeImage);
      switcher.classList.remove(switcherBefore);
      switcher.classList.add(switcherAfter);
    }
  };
}

handleViewportChange();
window.addEventListener('resize', handleViewportChange);

  // Когда пользователь взаимодействует с элементом, например, кликает на него или сдвигает ползунок у элемента <input> с типом range, происходит соответствующее событие.Браузер создает объект event и передает его в качестве аргумента в обработчик события, который вы определяете в JavaScript с помощью метода addEventListener().
  // Объект event содержит множество полезных свойств, которые вы можете использовать в своем коде.Например, свойство event.target содержит элемент, на котором произошло событие, а свойство event.type содержит тип события.

// Функция для переключения вкладок
function openTab(tabName) {
    console.log(`Открытие вкладки: ${tabName}`);

    // Скрываем все вкладки
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((content) => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // Убираем класс 'active' у всех кнопок
    const tabButtons = document.querySelectorAll('.btn');
    tabButtons.forEach((button) => {
        button.classList.remove('active');
    });

    // Показываем выбранную вкладку и делаем кнопку активной
    const tabContent = document.getElementById(tabName);
    if (tabContent) {
        tabContent.style.display = 'block';
        tabContent.classList.add('active');
    }

    // Добавляем класс 'active' на кнопку соответствующей вкладки
    const activeButton = document.querySelector(`#${tabName}Tab`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    console.log("DOM полностью загружен и разобран");

    const galleryTabButton = document.getElementById('galleryTab');
    const uploadTabButton = document.getElementById('uploadTab');

    if (galleryTabButton) {
        galleryTabButton.addEventListener('click', () => openTab('gallery'));
    }
    if (uploadTabButton) {
        uploadTabButton.addEventListener('click', () => openTab('upload'));
    }

    openTab('gallery');

    const uploadButton = document.getElementById('uploadButton');
    if (uploadButton) {
        uploadButton.addEventListener('click', () => {
            const fileInput = document.getElementById('file');
            if (fileInput) {
                fileInput.click();
            } else {
                console.error("Не удалось найти элемент с id 'file'");
            }
        });
    }

    const fileInput = document.getElementById('file');
    if (fileInput) {
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const loader = document.getElementById('loader');
                loader.style.display = 'block';

                const reader = new FileReader();
                reader.onload = function(e) {
                    loader.style.display = 'none';

                    const title = prompt("Введите название для загружаемой фотографии:");
                    const description = prompt("Введите описание для загружаемой фотографии:");

                    if (title && description) {
                        addImageToGallery(e.target.result, title, description);
                    } else {
                        alert('Название и описание являются обязательными для добавления в галерею.');
                    }
                };
                reader.readAsDataURL(file);
            } else {
                alert('Пожалуйста, выберите файл.');
            }
        });
    }

    // Добавляем обработчик для закрытия модального окна
    const closeModal = document.getElementById('closeModal');
    const imageModal = document.getElementById('imageModal');
    if (closeModal && imageModal) {
        closeModal.addEventListener('click', () => {
            imageModal.style.display = 'none';
        });
    }

    // Закрытие модального окна при клике вне изображения
    window.addEventListener('click', (event) => {
        if (event.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });
});

// Функция для добавления изображения в галерею
function addImageToGallery(imageSrc, title, description) {
    const gallery = document.querySelector('.gallery');

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${imageSrc}" alt="${title}" class="card__image">
        <div class="card__content">
            <p class="card__title">${title}</p>
            <p class="card__description">${description}</p>
        </div>
    `;

    // Добавляем событие клика для открытия изображения в модальном окне
    const cardImage = card.querySelector('.card__image');
    cardImage.addEventListener('click', () => {
        openImageModal(imageSrc);
    });

    gallery.appendChild(card);
}

// Функция для открытия изображения в модальном окне
function openImageModal(imageSrc) {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    if (imageModal && modalImage) {
        modalImage.src = imageSrc;
        imageModal.style.display = 'block';
    }
}

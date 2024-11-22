import './Tabs.css';
import './ImageUpload.css';
import './Card.css';
import './Gallery.css';

function openTab(tabName) {
    // Скрываем все вкладки
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((content) => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // Сбрасываем все кнопки
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

    const tabButton = document.querySelector(`button[onclick="openTab('${tabName}')"]`);
    if (tabButton) {
        tabButton.classList.add('active');
    }
}

// Функция для загрузки фото
function uploadPhoto() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput?.files[0];

    if (file) {
        alert(`Вы загрузили файл: ${file.name}`);
    } else {
        alert('Пожалуйста, выберите файл.');
    }
}

// Инициализация - показываем вкладку галереи по умолчанию
document.addEventListener('DOMContentLoaded', () => {
    openTab('gallery');
});

    // Глобальная переменная для хранения файла для скачивания
    let fileToDownload = '';
    
    // Обработчики для всех кнопок скачивания
    document.querySelectorAll('.download-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        fileToDownload = this.getAttribute('data-file');
        document.getElementById('licenseModal').style.display = 'block';
      });
    });

    // Обработчики для модального окна
    document.getElementById('acceptLicense').addEventListener('click', function() {
      if (fileToDownload) {
        // Создаем временную ссылку для скачивания
        const link = document.createElement('a');
        link.href = fileToDownload;
        link.download = fileToDownload.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      // Закрываем модальное окно
      document.getElementById('licenseModal').style.display = 'none';
      fileToDownload = '';
    });

    document.getElementById('declineLicense').addEventListener('click', function() {
      document.getElementById('licenseModal').style.display = 'none';
      fileToDownload = '';
    });

    document.querySelector('.close').addEventListener('click', function() {
      document.getElementById('licenseModal').style.display = 'none';
      fileToDownload = '';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
      if (event.target == document.getElementById('licenseModal')) {
        document.getElementById('licenseModal').style.display = 'none';
        fileToDownload = '';
      }
    });

    // Скрипт для плавающих кнопок
    window.addEventListener('scroll', function() {
      const socialButtons = document.querySelector('.social-buttons');
      const scrollPosition = window.scrollY;
      const contentTop = document.querySelector('.content').offsetTop;
      
      socialButtons.style.top = Math.max(20, scrollPosition - contentTop + 20) + 'px';
    });
import React from "react";
import styles from "./Policies.module.css";

const PoliciesCookies: React.FC = () => {
  return (
    <div>
      <h1 className={styles.section}>
        Соглашение об использовании файлов cookie
      </h1>
      <h3 className={styles.header}>Управление файлами cookie</h3>
      <p>
        Нашим Сайтом можно пользоваться и без cookie-файлов. Вы можете отключить
        сохранение cookie-файлов, ограничить их создание конкретными веб-сайтами
        или установить уведомление об отправке cookie-файлов в своем браузере.
        Вы также можете в любой момент удалить cookie-файлы с жесткого диска
        своего ПК (файл: «cookies»). Обратите внимание: в таком случае
        отображение страниц и руководство по использованию сайтов будут
        ограниченными. Большинство браузеров позволяют в той или иной степени
        контролировать большинство cookie-файлов через настройки браузера. Не
        все посетители нашего сайта используют веб-браузеры. Например, некоторые
        пользователи получают доступ к веб-сайтам или приложениям DHL с
        мобильных устройств. В таком случае отключение cookie-файлов или
        изменение настроек веб-браузера, вероятно, будет невозможно. Большинство
        интернет-браузеров изначально настроены автоматически принимать cookie.
        Пользователь может изменить настройки таким образом, чтобы браузер
        блокировал cookie или предупреждал, когда файлы данного типа будут
        отправлены на устройство. Есть несколько способов управления cookie.
        Пожалуйста, обратитесь к инструкции браузера для того, чтобы узнать
        больше о том, как скорректировать или изменить настройки браузера. Если
        отключить cookie, это может повлиять на работу Пользователя в Интернете.
        Если Пользователь использует различные устройства для просмотра и
        доступа к Сайту (например, компьютер, смартфон, планшет и т.д.), он
        должны убедиться, что каждый браузер на каждом устройстве настроен в
        соответствии с предпочтениями на работу с файлами cookie.
      </p>
    </div>
  );
};

export default PoliciesCookies;
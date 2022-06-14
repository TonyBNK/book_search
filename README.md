**Book Search**

**Ссылка на демо проекта:** https://tonybnk.github.io/book_search/

Проект представляет собой React-приложение поиска книг при использовании
TypeScript, Redux, Google Books API.<br />
Документация: https://developers.google.com/books/docs/v1/using.<br />
Для авторизации запросов к API выбран способ с предоставлением API
key (https://developers.google.com/books/docs/v1/using#APIKey).

**Реализация:**

На данном этапе в проекте реализованы следующие основные критерии:<br />
• Присутствует текстовое поле и кнопка поиска. По введенной пользователем
подстроке производится поиск книг. Триггером к поиску является либо нажатие
Enter (когда текстовое поле в фокусе), либо нажатие кнопки поиска.<br />
• Фильтрация по категориям. Ниже текстового поля располагается селектор с
категориями: all, art, biography, computers, history, medical, poetry. Если
выбрано "all" (выбрано изначально), то поиск производится по всем
категориям.<br />
• Сортировка. Рядом с селектором категорий находится селектор с вариантами
сортировки: relevance (выбран изначально), newest.<br />
• Найденные книги отображаются карточками, каждая из которых состоит из
изображения обложки книги, названия книги, названия категории и имен авторов.
Если для книги приходит несколько категорий, то отображается только первая.
Авторы отображаются все. Если не приходит какой-либо части данных, то вместо нее
просто пустое место.<br />
• Над блоком с карточками отображается количество найденных по запросу
книг.<br />
• Пагинация реализована по принципу 'load more'. Ниже блока с карточками
находится кнопка 'Load more', по клику на нее к уже загруженным книгам
подгружаются еще. Шаг пагинации - 30.<br />
• При клике на карточку происходит переход на детальную страницу книги, на
которой выводятся ее данные: изображение обложки, название, все категории, все
авторы, описание.

**Замечания:**

• Во время загрузки книг визуализируется индикатор;<br />
• При запросе конкретной книги со стороны сервера могут приходить теги в
качестве текста (особенности Google Books API);<br />
• Некоторые книги не имеют большой обложки поэтому, при открытии, в дело
вступает заглушка;<br />
• Максимальное количество возвращаемых книг - 40. При запросах используется
рекурсия, если количество отсортированных книг меньше 30.

**Работа с запросами:**

Работы с запросами осуществляется при помощи библиотеки Axios.<br />
Внедрены следующие HTTP API:<br />
• получение списка книг при использовании пагинации, фильтрации и
сортировки;<br />
• получение данных конкретной книги.

**Роутинг:**

Перемещение между страницами осуществляется при помощи библиотеки
React-Router-Dom.<br />
Реализованы следующие роуты:<br />
• /common-search - основная страница поиска;<br />
• /specific-book - страница выбранной книги.<br />

**Тесты:**

Для тестирования экшенов и редьюсеров использовалась библиотека Jest.
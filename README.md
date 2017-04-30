# default-web-page
Пробный результат выполненного задания.
Реализованы следующие действия:
1. Убрал Лишние комментарии из HTML.
2. Переместил свойства объектов из HTML в CSS.
3. Не создавал отдельный CSS-файл, чтобы не перегружать дисковую систему. Свойств не много.
4. Постарался добиться хорошего соответствия при минимуме заданных свойств.

Изменения, для корректной работы адаптивности:
1. Переделал макет, добавив горизонтальные колонки-обертки. Они занимают определенный процент видимой части страницы.
2. Для этих колонок также задана минимальная высота, чтобы они не наезжали друг на друга.
3. Для всей страницы указана минимальная ширина.
4. Могу ли я использовать vh, вместо процентов? Насколько это допустимо для работы этой страницы?
5. Размеры анимации заданы в HTML-файле, в блоке JS:
canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
Я не стал это убирать, возможно это требуется для корректной работы скрипта в других условиях.
Задал необходимые размеры через !important.
6. Изменил параметры работы media-запроса на 767px, вместо непонятной цифры 420 :).
7. Чуть подкорректировал корректную работу всех слоев анимации.
8. Проверил работу и адаптивность на всех доступных браузерах, с учетом различных масштабов.

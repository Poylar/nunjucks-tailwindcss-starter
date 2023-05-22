module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: '(class|id|data.*)',

      },
    },
    { name: 'removeTitle', active: true }, // Удаляет элемент <title>
    { name: 'removeDesc', active: true }, // Удаляет элемент <desc>
    { name: 'removeStyleElement', active: true }, // Удаляет элемент <style>
    { name: 'removeScriptElement', active: true }, // Удаляет элемент <script>
    { name: 'removeComments', active: true }, // Удаляет комментарии
    { name: 'removeMetadata', active: true }, // Удаляет элемент <metadata>
    { name: 'removeUselessDefs', active: true }, // Удаляет элементы <defs>, которые не используются
    { name: 'removeEmptyContainers', active: true }, // Удаляет пустые контейнеры
    { name: 'removeHiddenElems', active: true }, // Удаляет скрытые элементы (display: none)
    { name: 'removeEmptyText', active: true }, // Удаляет пустой текст
    { name: 'removeEmptyAttrs', active: true }, // Удаляет пустые атрибуты
    { name: 'removeViewBox', active: false }, // Не удаляет атрибут viewBox
    { name: 'removeDimensions', active: true }, // Удаляет атрибуты ширины и высоты, если они соответствуют размеру элемента
    { name: 'removeDoctype', active: true }, // Удаляет документ типа
    { name: 'removeUselessStrokeAndFill', active: true }, // Удаляет бесполезные stroke и fill атрибуты
    { name: 'removeUnknownsAndDefaults', active: true }, // Удаляет неизвестные элементы и атрибуты
    { name: 'removeNonInheritableGroupAttrs', active: true }, // Удаляет не наследуемые атрибуты групп
    { name: 'mergePaths', active: true }, // Объединяет несколько контуров в один, если это возможно
    { name: 'collapseGroups', active: true }, // сжатие Групп
    { name: 'sortAttrs', active: true }, // Сортировка атрибутов
    { name: 'cleanupNumericValues', active: true }, // Округление числовых значений
    { name: 'cleanupListOfValues', active: true }, // Удаляет пустые или ненужные значения
    { name: 'convertTransform', active: true }, // Преобразует атрибут transform в атрибуты преобразования
    { name: 'convertStyleToAttrs', active: true }, // Преобразует свойства стиля в атрибуты
    // { name: 'convertColors', params: { currentColor: true } }, // Преобразует цветовые значения в формат #RRGGBB, если они заданы в формате rgb(), rgba() или цветными словами
    { name: 'convertPathData', active: false }, // Не преобразует данные пути, такие как "M10 10L20 20" в более короткий формат "M 10 10 L 20 20"
    { name: 'convertShapeToPath', active: true }, // Уонвертирует примитивы в элемент <path>
    { name: 'convertEllipseToCircle', active: true }, // Конвертирует эллипсы в окружности
  ],
};

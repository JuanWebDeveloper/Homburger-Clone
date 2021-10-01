/*==================== ACCORDION ====================*/
const TAB = document.getElementById('tab');

const checked = (propety) => propety.checked && $(propety).removeAttr('checked');

TAB.addEventListener('click', checked(TAB));

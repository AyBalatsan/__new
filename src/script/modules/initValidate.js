export function initValidate() {
    let isValid = true;
    let form = document.getElementsByClassName('modal-partner__form')[0];
    let inputs = form.getElementsByClassName('modal__input-item');
    let checkboxes = form.getElementsByClassName('modal-partner__ways-checkbox');
    let errorText = form.getElementsByClassName('modal__error-text')[0];
    let formTouched = false;
    function anyCheckboxChecked() {
        return form.querySelector('.modal-partner__ways-checkbox:checked') !== null;
    }
    function setCheckboxesValid(state) {
        for (let checkbox of checkboxes) {
            checkbox.classList.toggle('modal-partner__ways-checkbox--empty', state);
        }
    }
    for (let checkbox of checkboxes) {
        checkbox.addEventListener('change', function (e) {
            if (formTouched) {
                setCheckboxesValid(!anyCheckboxChecked());
            }
        });
    }
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        formTouched = true;
        for (let input of inputs) {
            let isEmpty = input.value.trim() === '';
            input.classList.toggle('modal__input-item--invalid', isEmpty);
            if (isEmpty) {
                isValid = false;
            }
        }
        let checkboxChecked = anyCheckboxChecked();
        setCheckboxesValid(!checkboxChecked);
        if (!checkboxChecked) {
            isValid = false;
        }
        errorText.style.display = isValid ? 'none' : 'block';
        if (isValid) {
            form.submit();
        }
    });
}
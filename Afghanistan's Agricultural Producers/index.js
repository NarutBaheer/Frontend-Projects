document.addEventListener('DOMContentLoaded', function() {
    const formFields = [
        'productName', 'productType', 'harvestDate', 'region', 'organicCertified',
        'quantity', 'pricePerKg', 'description', 'customerFeedback',
        'deliveryPreference', 'productRequest'
    ];

    // Initially disable all fields except the first
    formFields.slice(1).forEach(id => {
        document.getElementById(id).disabled = true;
    });

    function enableNextField(currentId) {
        const currentIndex = formFields.indexOf(currentId);
        const nextFieldId = formFields[currentIndex + 1];
        if (nextFieldId) {
            document.getElementById(nextFieldId).disabled = false;
            document.getElementById(nextFieldId).focus(); 
        }
    }

    function setErrorMessage(elementId, message) {
        const errorSpanId = elementId + 'Error';
        const errorMessage = document.getElementById(errorSpanId);
        if (message) {
            errorMessage.textContent = message;
            document.getElementById(elementId).classList.add('error');
        } else {
            errorMessage.textContent = '';
            document.getElementById(elementId).classList.remove('error');
        }
    }

    function validateField(fieldId) {
        const field = document.getElementById(fieldId);
        let isValid = false;
        let message = '';

        // Common validation for non-empty text fields
        const nonEmptyTextFields = ['productName', 'productType', 'region', 'description', 'customerFeedback', 'deliveryPreference', 'productRequest'];
        if (nonEmptyTextFields.includes(fieldId)) {
            isValid = field.value.trim() !== '';
            message = isValid ? '' : 'This field cannot be empty.';
        }

        // Specific validations
        switch (fieldId) {
            case 'harvestDate':
                isValid = /^\d{4}-\d{2}-\d{2}$/.test(field.value);
                message = isValid ? '' : 'Please enter the date in YYYY-MM-DD format.';
                break;
            case 'quantity':
                isValid = /^[1-9]\d*$/.test(field.value);
                message = isValid ? '' : 'Quantity must be a positive number.';
                break;
            case 'pricePerKg':
                isValid = !isNaN(parseFloat(field.value)) && isFinite(field.value) && parseFloat(field.value) > 0;
                message = isValid ? '' : 'Price must be in Afhani.';
                break;
            case 'organicCertified':
                isValid = field.value === 'Yes' || field.value === 'No';
                message = isValid ? '' : 'Please select an option.';
                break;
        }

        setErrorMessage(fieldId, message);
        if (isValid) {
            enableNextField(fieldId);
        }
    }
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.addEventListener('blur', () => validateField(fieldId));
        if(field.tagName === 'SELECT') {
            field.addEventListener('change', () => validateField(fieldId));
        }
    });
});

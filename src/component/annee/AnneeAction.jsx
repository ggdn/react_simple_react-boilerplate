export function getAnnees() {
    return { type: 'GET_ANNEES'}
}

export function resetForm() {
    return { type: 'RESET_FORM'}
}

export function toggleForm() {
    return { type: 'TOGGLE_FORM'}
}

export function updateform(fieldId, value) {
    return { type: 'UPDATE_FORM', fieldId:fieldId, value:value}
}
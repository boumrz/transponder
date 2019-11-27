export const requiredField = value => {
  if (value) {
    return undefined
  }
  return 'Обязательное поле!'
}

export const validatePasswordCreator = minLength => value => {
  if (value && value.length < minLength) {
    return `Длина символов должна быть не менее ${minLength}`
  }

  return undefined
}

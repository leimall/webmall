

export function isVariableValid(variable: any) {
   return variable !== null && variable !== undefined
}

export function validateBoolean(variable: any, value : boolean) {
   if (isVariableValid(variable) && variable === value) {
      return true
   }

   return false
}

export function isMacOs() {
   return window.navigator.userAgent.includes('Mac')
}

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

function dateValidator(): ValidatorFn {
    return function(control: AbstractControl): ValidationErrors | null {
        let valid = true;
        const {d, m, y} = control.value
        const date = new Date(y, m - 1, d)
        if (date.getMonth() !== (m - 1) || date.getFullYear() !== y) {
            valid = false;
        }
        return !valid ? {date: {value: control.value}} : null;
    }
}

export { dateValidator }
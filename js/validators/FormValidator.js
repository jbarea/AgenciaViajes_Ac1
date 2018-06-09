class FormValidator {

    static get CODE() {
        return {
            ok: 1,
            nok: 2
        }
    }

    static get MSG() {
        return {
            required: 'Campo requerido',
            invalid_format: 'Formato no valido',
            invalid_min_length: 'caracteres mínimo'
        };
    }

    static validate(data) {
        return {
            nombre: this.validateNombre(data.nombre),
            email: this.validateEmail(data.email)
        }
    }

    static validateNombre(nombre) {
        let result = {
            code: null,
            msg: null
        };
        if (Utils.isEmpty(nombre)) {
            result.msg = this.MSG.required;
        } else if (!Utils.isMinLength(nombre, 3)) {
            result.msg = `Tres ${this.MSG.invalid_min_length}`
        }
        result.code = result.msg ? this.CODE.nok : this.CODE.ok;
        return result;
    }

    static validateEmail(email) {
        let result = {
            code: null,
            msg: null
        };
        if (Utils.isEmpty(email)) {
            result.msg = this.MSG.required;
        } else if (!Utils.isValidEmail(email)) {
            result.msg = this.MSG.invalid_format;
        }
        result.code = result.msg ? this.CODE.nok : this.CODE.ok;
        return result;
    }
}
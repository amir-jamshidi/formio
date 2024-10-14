export const schema = {
    "display": "form",
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    },
    "components": [
        {
            "label": "نام",
            "placeholder": "نام ثبت نام کننده",
            "applyMaskOn": "change",
            "customClass": "form-control mt-2 pb-3 col-md-4",
            "tableView": true,
            "validate": {
                "required": true,
                "minLength": 4,
                "maxLength": 32
            },
            "validateWhenHidden": false,
            "errors": {
                "required": "وارد کردن این فیلد الزامیه",
                "maxLength": "حداکثر کاراکتر مجاز 32 حرفه",
                "minLength": "حداقل کاراکتر مجاز 4 حرفه"
            },
            "key": "name",
            "type": "textfield",
            "input": true
        },
        {
            "label": "نام خانوادگی",
            "placeholder": "نام خانوادگی ثبت نام کننده",
            "applyMaskOn": "change",
            "customClass": "form-control mt-2 pb-3 col-md-4",
            "tableView": true,
            "validate": {
                "required": true,
                "minLength": 4,
                "maxLength": 32
            },
            "validateWhenHidden": false,
            "errors": {
                "required": "وارد کردن این فیلد الزامیه",
                "maxLength": "حداکثر کاراکتر مجاز 32 حرفه",
                "minLength": "حداقل کاراکتر مجاز 4 حرفه"
            },
            "key": "lastname",
            "type": "textfield",
            "input": true
        },
        {
            "label": "کد ملی",
            "placeholder": "کد ملی ثبت نام کننده",
            "applyMaskOn": "change",
            "customClass": "form-control mt-2 pb-3",
            "tableView": true,
            "validate": {
                "required": true,
                "minLength": 10,
                "maxLength": 10
            },
            "validateWhenHidden": false,
            "errors": {
                "required": "وارد کردن کد ملی الزامیه",
                "maxLength": "کد ملی باید 10 رقم باشه",
                "minLength": "کد ملی باید 10 رقم باشه"
            },
            "key": "nationalId",
            "type": "textfield",
            "input": true
        },
        {
            "label": "مدرک تحصیلی",
            "widget": "choicesjs",
            "placeholder": "مدرک تحصیلی ثبت نام کننده",
            "customClass": "form-control mt-2 pb-3 in-se",
            "tableView": true,
            "data": {
                "values": [
                    {
                        "label": "دیپلم",
                        "value": "diplom"
                    },
                    {
                        "label": "فوق دیپلم",
                        "value": "fogh_diplom"
                    },
                    {
                        "label": "لیسانس",
                        "value": "licans"
                    },
                    {
                        "label": "فوق لیسانس",
                        "value": "fogh_licans"
                    }
                ]
            },
            "dataType": "string",
            "validate": {
                "required": true
            },
            "validateWhenHidden": false,
            "errors":{
                "required" : 'انتخاب کردن یکی از آیتم ها الزامیه'
            },
            "key": "degree",
            "type": "select",
            "input": true
        },
        {
            "label": "ثبت نام",
            "showValidations": false,
            "disableOnInvalid": true,
            "tableView": false,
            "key": "submit",
            "type": "button",
            "input": true,
            "customClass": "form-control mt-2 pb-3 col-md-4",
            "saveOnEnter": false
        }
    ]
}
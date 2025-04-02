import { FormDataType, FormError } from "../types/nhis";

export const validateField = (name: string, value: string, formData: FormDataType, setError: React.Dispatch<React.SetStateAction<FormError>>) => {
    let errorMsg: string | null = null;

    if (!value) {
        errorMsg = `${name} 필드는 필수 입력값입니다.`;
    } else if (name === "birthdate" && !/^\d{6}$/.test(value)) {
        errorMsg = "주민번호 앞자리는 YYMMDD 형식이어야 합니다.";
    } else if (name === "phoneNo" && !/^010\d{8}$/.test(value)) {
        errorMsg = "올바른 휴대폰 번호를 입력하세요.";
    }

    setError((prev) => ({ ...prev, [name]: errorMsg }));
};

export const validateForm = (formData: FormDataType, setError: React.Dispatch<React.SetStateAction<FormError>>) => {
    let valid = true;
    const newError: FormError = {};

    for (const key in formData) {
        let errorMsg: string | null = null;

        if (!formData[key as keyof FormDataType]) {
            switch (key) {
                case "loginTypeLevel":
                    errorMsg = "간편인증 선택은 필수 입력값입니다.";
                    break;
                case "id":
                    errorMsg = "사용자 ID는 필수 입력값입니다.";
                    break;
                case "legalName":
                    errorMsg = "이름은 필수 입력값입니다.";
                    break;
                case "birthdate":
                    errorMsg = "생년월일은 필수 입력값입니다.";
                    break;
                case "phoneNo":
                    errorMsg = "전화번호는 필수 입력값입니다.";
                    break;
                case "telecom":
                    errorMsg = "통신사는 필수 입력값입니다.";
                    break;
                default:
                    errorMsg = `${key} 필드는 필수 입력값입니다.`;
            }

            newError[key] = errorMsg;
            valid = false;
        }
    }

    setError(newError);
    return valid;
};

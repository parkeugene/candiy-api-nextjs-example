import { FormDataType } from "../types/nhis";
import {JSX} from "react";

interface FormProps {
    formData: FormDataType;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    renderInputField: (
        name: keyof FormDataType,
        type: string,
        placeholder: string,
        value: string
    ) => JSX.Element;
    renderSelectField: (name: keyof FormDataType, value: string, options: string[]) => JSX.Element;
}

const Form: React.FC<FormProps> = ({
                                       formData,
                                       renderInputField,
                                       renderSelectField,
                                   }) => {
    return (
        <div className="space-y-3 max-w-lg mx-auto">
            {renderSelectField("loginTypeLevel", formData.loginTypeLevel, [
                "간편인증 선택",
                "카카오톡",
                "페이코",
                "삼성패스",
                "국민은행(국민인증서)",
                "통신사(PASS)",
                "네이버",
                "신한은행(신한인증서)",
                "토스",
                "뱅크샐러드",
                "하나은행(하나인증서)",
                "NH모바일인증서",
            ])}

            {renderInputField("id", "text", "사용자 ID", formData.id)}
            {renderInputField("legalName", "text", "이름", formData.legalName)}
            {renderInputField("birthdate", "text", "생년월일 (예: 19801212)", formData.birthdate)}
            {renderInputField("phoneNo", "text", "전화번호 (예: 01012345678)", formData.phoneNo)}

            {renderSelectField("telecom", formData.telecom, [
                "통신사 선택",
                "SKT(SKT알뜰폰)",
                "KT(KT알뜰폰)",
                "LG U+(LG U+알뜰폰)",
            ])}
        </div>
    );
};

export default Form;

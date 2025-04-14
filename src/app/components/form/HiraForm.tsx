import { JSX } from "react";
import React, { useState, useEffect } from "react";
import { FormDataType } from "../../types/hira";

interface HiraFormProps {
    formData: FormDataType;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
    renderInputField: (
        name: keyof FormDataType,
        type: string,
        placeholder: string,
        value: string
    ) => JSX.Element;
    renderLoginTypeLevelField: (
        name: keyof FormDataType,
        value: string | undefined,
        options: { key: string; value: string }[]
    ) => React.JSX.Element;
    renderTelecomSelectField: (
        name: keyof FormDataType,
        value: string,
        options: { key: string; value: string }[]
    ) => JSX.Element;
    showLoginTypeLevel?: boolean;
}

const HiraForm: React.FC<HiraFormProps> = ({
                                               formData,
                                               setFormData,
                                               renderInputField,
                                               renderLoginTypeLevelField,
                                               renderTelecomSelectField,
                                           }) => {
    const [showLoginTypeLevel, setShowLoginTypeLevel] = useState(formData.loginType === "2");

    useEffect(() => {
        setShowLoginTypeLevel(formData.loginType === "5");
    }, [formData.loginType]);

    const handleLoginTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // 부모 상태 업데이트
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // 로컬 상태 업데이트
        setShowLoginTypeLevel(value === "1");
    };

    const renderRadioField = (): JSX.Element => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2">인증 방법 선택</label>
            <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="loginType"
                        value="5"
                        checked={formData.loginType === "5"}
                        onChange={handleLoginTypeChange}
                    />
                    <span className="text-white">간편인증</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="loginType"
                        value="2"
                        checked={formData.loginType === "2"}
                        onChange={handleLoginTypeChange}
                    />
                    <span className="text-white">휴대폰 문자 인증</span>
                </label>
            </div>
        </div>
    );

    const additionalFields = (
        <div className="mb-4 flex gap-4">
            <div className="flex-1">
                {renderInputField("identity1", "text", "주민번호 앞자리", formData.identity1)}
            </div>
            <div className="flex-1">
                {renderInputField("identity2", "password", "주민번호 뒷자리", formData.identity2)}
            </div>
        </div>
    );

    return (
        <div className="space-y-3 max-w-lg mx-auto">
            {renderRadioField()}
            {showLoginTypeLevel && renderLoginTypeLevelField?.("loginTypeLevel", formData.loginTypeLevel, [
                {key: "간편인증 선택", value: ""},
                {key: "카카오톡", value: "1"},
                {key: "페이코", value: "2"},
                {key: "삼성패스", value: "3"},
                {key: "국민은행(국민인증서)", value: "4"},
                {key: "통신사(PASS)", value: "5"},
                {key: "네이버", value: "6"},
                {key: "신한은행(신한인증서)", value: "7"},
                {key: "토스", value: "8"},
                {key: "뱅크샐러드", value: "9"},
                {key: "하나은행(하나인증서)", value: "10"},
                {key: "NH모바일인증서", value: "11"},
            ])}
            {renderTelecomSelectField("telecom", formData.telecom, [
                {key: "통신사 선택", value: ""},
                {key: "SKT", value: "0"},
                {key: "KT", value: "1"},
                {key: "LG U+", value: "2"},
                {key: "SKT 알뜰폰", value: "3"},
                {key: "KT 알뜰폰", value: "4"},
                {key: "LG U+ 알뜰폰", value: "5"},
            ])}
            {renderInputField("id", "text", "사용자 ID", formData.id)}
            {renderInputField("legalName", "text", "이름", formData.legalName)}
            {renderInputField("phoneNo", "text", "전화번호 (예: 01012345678)", formData.phoneNo)}

            {additionalFields}
            {showLoginTypeLevel}
        </div>
    );
};

export default HiraForm;

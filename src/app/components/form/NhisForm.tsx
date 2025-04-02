import { FormDataType } from "../../types/nhis";
import { JSX } from "react";
import BaseForm from "./BaseForm";

interface FormProps {
    formData: FormDataType;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    renderInputField: (
        name: keyof FormDataType,
        type: string,
        placeholder: string,
        value: string
    ) => JSX.Element;
    renderSelectField: (
        name: keyof FormDataType, 
        value: string, 
        options: { key: string; value: string }[]
    ) => JSX.Element;
}

const NhisForm: React.FC<FormProps> = ({
    formData,
    renderInputField,
    renderSelectField,
}) => {
const additionalFields = (
        <>
        {renderInputField("birthdate", "text", "생년월일 (예: 19801212)", formData.birthdate)}
        </>
    );

    return (
        <BaseForm<FormDataType>
            formData={formData}
            renderInputField={renderInputField}
            renderSelectField={renderSelectField}
            additionalFields={additionalFields}
        />
    );
};

export default NhisForm;

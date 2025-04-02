import { JSX } from "react";
import { FormDataType } from "../../types/hira";
import BaseForm from "./BaseForm";

interface HiraFormProps {
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

const HiraForm: React.FC<HiraFormProps> = ({
    formData,
    renderInputField,
    renderSelectField,
}) => {
    const additionalFields = (
        <>
            <div className="mb-4 flex gap-4">
                <div className="flex-1">
                    {renderInputField("birthdate", "text", "주민번호 앞자리", formData.birthdate)}
                </div>
                <div className="flex-1">
                    {renderInputField("identity", "password", "주민번호 뒷자리", formData.identity)}
                </div>
                
            </div>
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

export default HiraForm;

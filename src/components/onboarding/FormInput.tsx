
import { Input } from "@/components/ui/input";

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const FormInput = ({ label, value, onChange, placeholder }: FormInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white/5 border-white/10 focus:border-jax-purple"
      />
    </div>
  );
};

export default FormInput;

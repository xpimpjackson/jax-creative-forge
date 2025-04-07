
import { Textarea } from "@/components/ui/textarea";

interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const FormTextarea = ({ label, value, onChange, placeholder }: FormTextareaProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[120px] bg-white/5 border-white/10 focus:border-jax-purple"
      />
    </div>
  );
};

export default FormTextarea;

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p className="text-sm">{message}</p>
    </div>
  );
}

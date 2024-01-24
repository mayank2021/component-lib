export interface Option {
  label: string;
  value: string;
}

export interface DropdownOptions {
  options: Option[];
  value: Option | null;
  onChange: (option: Option) => void;
}

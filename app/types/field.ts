export type Component = "input" | "select" | "checkbox" | "button" | "image";

export type Entity = "categories" | "vendors" | "users";

export type Select = {
    value: string,
    label: string,
}

export type Field = {
  component: Component;
  src?: string;
  alt?: string;
  name: string;
  label?: string;
  variant?: string;
  type?: string;
  defaultSelectedKeys?: string[];
  values?: Select[];
  defaultValue?: string;
  isRequired?: boolean;
  fullWidth?: boolean;
};

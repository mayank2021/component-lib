export interface NavInterface {
  children: React.ReactNode;
}

export interface NavContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

export interface LinkTypes {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export type RouteTypes = Pick<LinkTypes, "to" | "children" | "className">

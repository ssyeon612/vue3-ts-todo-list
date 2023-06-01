export interface TodoItem {
  id: number;
  title: string;
  status: "active" | "clear";
}
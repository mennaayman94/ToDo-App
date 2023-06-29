import { TodoItemModel } from "../models/TodoItemModel";

export const ConvertToDotoModel = (data: any[]): TodoItemModel[] => {
  return data.map((item): TodoItemModel => {
    return {
      id: item.id,
      Title: item.Title,
      Description: item.Description,
      Checked: item.cheked,
      CreatedAt: item.createdAt,
      FinishedAt: item.FinishedAt,
      ArchievedAt: item.ArchiveAt,
    };
  });
};

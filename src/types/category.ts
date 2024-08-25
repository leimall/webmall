export type CategoryItem = {
    ID: number
    title: string,
    title_en: string,
    parent_id: number,
    type: number,
    value: string,
    createdAt: Date,
    updatedAt: Date
}

export type CountryItem = {
  name_en: string; 
  code: string; 
} 
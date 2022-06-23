type BudgetType = 'Самовывоз' | 'Доставка' | 'Примерочная'

export type PickPoint = {
  address: string
  budgets: BudgetType[]
  latitude: number
  longitude: number
}

import { HttpResponse, http } from 'msw'
import { recommendsData } from '../data/recommendsData'

export const recommends = [
  http.get('/mock/recommends', () => {
    return HttpResponse.json(recommendsData)
  }),
]